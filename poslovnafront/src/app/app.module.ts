import { UploadFileService } from './services/fileupload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { XmlImportComponent } from './xml-import/xml-import.component';
import { ClearingimportComponent } from './clearingimport/clearingimport.component';
import { ExportComponent } from './export/export.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    XmlImportComponent,
    ClearingimportComponent,
    ExportComponent,
    HomeComponent
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
