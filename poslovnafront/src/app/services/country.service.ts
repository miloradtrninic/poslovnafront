import {Component, OnInit, ViewChild} from '@angular/core';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountryModel } from '../model/country.model';
import { AbstractService } from './entity-service.service';

@Injectable({
providedIn: 'root'
})
export class CountryService extends AbstractService<CountryModel, string>  {

  constructor(protected http: HttpClient) {
    super(http, '/drzava');
  }
}
