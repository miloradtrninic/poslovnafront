

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
import { BankComponent } from '../panel/bank/bank.component';
import { AccountBalanceComponent } from '../account-balance/account-balance.component';
import { KursnalistaComponent } from './../../panel/kursnalista/kursnalista.component';

const routes: Routes = [
  { path: 'importrtgs', component: XmlImportComponent },
  { path: 'importclearing', component: ClearingimportComponent },
  { path: 'export', component: ExportComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'panel', component: PanelComponent, children: [
      { path: 'drzava', component: CountryComponent },
      { path: 'naseljenomesto', component: CityComponent },
      { path: 'banka', component: BankComponent },
      { path: 'lista', component: KursnalistaComponent }
    ]
  },
  { path: 'account-balance', component: AccountBalanceComponent },
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
