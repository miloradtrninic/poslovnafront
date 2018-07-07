
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountryModel } from '../model/country.model';
import { AbstractService } from './entity-service.service';

@Injectable()
export class CountryService extends AbstractService<CountryModel, number>  {

  constructor(http: HttpClient) {
    super(http, '/drzava');
  }
}
