import { ClearingimportComponent } from './clearingimport/clearingimport.component';
import { XmlImportComponent } from './xml-import/xml-import.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: 'importrtgs', component: XmlImportComponent},
  { path: 'importclearing', component: ClearingimportComponent}
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
