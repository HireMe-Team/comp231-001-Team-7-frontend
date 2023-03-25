import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, Observable, switchMap, tap } from 'rxjs';
import IUser from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(
    private storage: AngularFireStorage,
    private userService: UserService,
    private http: HttpClient
  ) {}
  currentUser: IUser = this.userService.getUserInfo();

  uploadFile(path: string, file: File) {
    const storageRef = this.storage.ref(
      `userUpload/${this.currentUser.userId}/resume`
    );
    const fileRef = storageRef.child(path);
    const task = fileRef.put(file);

    return task;
  }

  getUserFiles(userId: number): Observable<any> {
    const storageRef = this.storage.ref('userUpload/' + userId + '/resume');
    return storageRef.listAll();
  }
}
