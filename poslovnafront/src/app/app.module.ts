import { UploadFileService } from './services/fileupload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { XmlImportComponent } from './xml-import/xml-import.component';
import { ClearingimportComponent } from './clearingimport/clearingimport.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    XmlImportComponent,
    ClearingimportComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
