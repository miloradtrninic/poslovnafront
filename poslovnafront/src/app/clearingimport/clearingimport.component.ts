import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../services/fileupload.service';
import {HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-clearingimport',
  templateUrl: './clearingimport.component.html',
  styleUrls: ['./clearingimport.component.css']
})
export class ClearingimportComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 }
  constructor(private uploadService: UploadFileService, private toaster: ToastrService) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorageClearing(this.currentFileUpload).subscribe((event: HttpEvent<{}>) => {
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
  ngOnInit() {
  }

}
