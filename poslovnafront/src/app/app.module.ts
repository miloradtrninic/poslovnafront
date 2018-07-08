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
import { PanelComponent } from './panel/panel.component';
import { CountryComponent } from './panel/country/country.component';
import { CityComponent } from './panel/city/city.component';
import { CountryService } from './services/country.service';
import { CityService } from './services/city.service';
import { KursnaListaService } from './services/kursnalista.service';
import { ValutaService } from './services/valuta.service';
import { VrstaPlacanjaService } from './services/vrstaplacanja.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    XmlImportComponent,
    ClearingimportComponent,
    ExportComponent,
    HomeComponent,
    PanelComponent,
    CountryComponent,
    CityComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UploadFileService,
    CountryService,
    CityService,
    KursnaListaService,
    ValutaService,
    VrstaPlacanjaService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
