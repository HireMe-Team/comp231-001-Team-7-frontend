import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import IUser from 'src/app/models/user.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private fileUploadService: FileUploadService,
    private storage: AngularFireStorage
  ) {}
  selectedFile: File = null;
  user: IUser;
  resumes = [];
  caution: String;
  caution_class: String = 'text-danger';

  uploadFile() {
    const filePath = this.selectedFile.name;
    const task = this.fileUploadService.uploadFile(filePath, this.selectedFile);

    task.snapshotChanges().subscribe((snapshot) => {
      console.log('Uploaded a file', snapshot);
    });
  }
  uploadProfileImage() {
    const filePath = this.selectedFile.name;
    const storageRef = this.storage.ref(
      `userUpload/${this.user.userId}/profilePic`
    );
    const fileRef = storageRef.child(filePath);
    const uploadTask = fileRef.put(this.selectedFile);

    uploadTask.snapshotChanges().subscribe((snapshot) => {
      if (snapshot.state === 'running') {
        this.caution = 'Uploading';
      } else {
        this.caution_class = 'text-success';
        this.caution = 'Uploaded';

        fileRef.getDownloadURL().subscribe((url) => {
          this.userService.uploadProfilePic(this.user.userId, url);
        });
      }
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit() {
    this.user = this.userService.getUserInfo();
    console.log(this.user);
    // get uploaded resume
    this.fileUploadService.getUserFiles(this.user.userId).subscribe((files) => {
      this.resumes = files.items;
    });
  }
}
