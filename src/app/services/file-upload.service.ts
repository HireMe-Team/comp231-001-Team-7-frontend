// Import necessary modules and services
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import IUser from '../models/user.model';
import { UserService } from './user.service';

// Define the service
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  // Inject necessary services
  constructor(
    private storage: AngularFireStorage,
    private userService: UserService
  ) {}

  // Get the current user from the user service
  currentUser: IUser = this.userService.getUserInfo();

  // Define function to upload a file to the specified path
  uploadFile(path: string, file: File) {
    // Get a reference to the storage location for the current user's resume
    const storageRef = this.storage.ref(
      `userUpload/${this.currentUser.userId}/resume`
    );
    // Get a reference to the specific file being uploaded
    const fileRef = storageRef.child(path);
    // Upload the file using AngularFireStorage
    const task = fileRef.put(file);

    // Return the upload task
    return task;
  }

  // Define function to get a list of all files uploaded by a user
  getUserFiles(userId: number): Observable<any> {
    // Get a reference to the storage location for the specified user's resume
    const storageRef = this.storage.ref('userUpload/' + userId + '/resume');
    // Get a list of all files in that storage location
    return storageRef.listAll();
  }
}
