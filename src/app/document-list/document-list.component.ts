import { Component } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  documents: File[] = [];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.documents.push(file);
  }

  onUpload() {
    
    this.documents = [];
  }

  onDelete(document: File) {
    const index = this.documents.indexOf(document);
    if (index >= 0) {
      this.documents.splice(index, 1);
    }
  }
}

