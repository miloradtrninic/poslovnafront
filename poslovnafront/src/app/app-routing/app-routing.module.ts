import { KursnalistaComponent } from './../panel/kursnalista/kursnalista.component';
import { ClearingimportComponent } from '../clearingimport/clearingimport.component';
import { XmlImportComponent } from '../xml-import/xml-import.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule, CanActivate } from '@angular/router';
import { ExportComponent } from '../export/export.component';
import { HomeComponent } from '../home/home.component';
import { PanelComponent } from '../panel/panel.component';
import { CountryComponent } from '../panel/country/country.component';
import { CityComponent } from '../panel/city/city.component';
import {BankComponent} from '../panel/bank/bank.component';
import { VrstaplacanjaComponent } from '../panel/vrstaplacanja/vrstaplacanja.component';
import { ValutaComponent } from '../panel/valuta/valuta.component';
import { AccountBalanceComponent } from '../account-balance/account-balance.component';
import { ReportComponent } from '../report/report.component';
import { NovakursnalistaComponent } from '../panel/kursnalista/novakursnalista/novakursnalista.component';


const routes: Routes = [
  { path: 'importrtgs', component: XmlImportComponent},
  { path: 'importclearing', component: ClearingimportComponent},
  { path: 'export', component : ExportComponent},
  { path: 'home', component : HomeComponent},
  {path: 'panel', component: PanelComponent , children : [
    {path: 'drzava' , component: CountryComponent},
    {path: 'naseljenomesto', component: CityComponent},
    {path: 'naseljenomesto/:drzava', component: CityComponent},
    {path: 'banka' , component: BankComponent},
    {path: 'vrstaplacanja' , component: VrstaplacanjaComponent},
    {path: 'valuta' , component: ValutaComponent},
    {path: 'valuta/:drzava' , component: ValutaComponent},
    {path: 'lista', component: KursnalistaComponent},
    {path: 'novakursnalista', component: NovakursnalistaComponent}
  ]},
  {path: 'account-balance', component: AccountBalanceComponent},
  {path: 'report', component: ReportComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
