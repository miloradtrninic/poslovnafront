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
import { AccountBalanceService } from './services/account-balance.service';
import { VrstaPlacanjaService } from './services/vrstaplacanja.service';
import { BankComponent } from './panel/bank/bank.component';
import {BankService} from './services/bank.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VrstaplacanjaComponent } from './panel/vrstaplacanja/vrstaplacanja.component';
import { ValutaComponent } from './panel/valuta/valuta.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { ReportComponent } from './report/report.component';
import { KursnalistaComponent } from './panel/kursnalista/kursnalista.component';
import { NovakursnalistaComponent } from './panel/kursnalista/novakursnalista/novakursnalista.component';

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
    CityComponent,
    VrstaplacanjaComponent,
    BankComponent,
    ValutaComponent,
    AccountBalanceComponent,
    ReportComponent,
    KursnalistaComponent,
    NovakursnalistaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UploadFileService,
    CountryService,
    CityService,
    KursnaListaService,
    ValutaService,
    VrstaPlacanjaService,
    BankService,
    AccountBalanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
