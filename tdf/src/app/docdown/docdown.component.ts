import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../services/upload-file.service';
 
@Component({
  selector: 'app-docdown',
  templateUrl: './docdown.component.html',
  styleUrls: ['./docdown.component.css']
})
export class DocdownComponent implements OnInit {

  
  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }
  showFiles(enable: boolean) {
    this.showFile = enable;
 
    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }


}
