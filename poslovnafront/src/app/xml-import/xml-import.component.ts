import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/fileupload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-xml-import',
  templateUrl: './xml-import.component.html',
  styleUrls: ['./xml-import.component.css']
})
export class XmlImportComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService, private toaster: ToastrService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorageRtgs(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.toaster.success('Uspesno.');
      }
    }, event => {
      this.toaster.error(event.error);
    });

    this.selectedFiles = undefined;
  }
}
