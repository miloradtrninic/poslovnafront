
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountryModel } from '../model/country.model';
import { AbstractService } from './entity-service.service';
import { ValutaModel } from '../model/valuta.model';

@Injectable()
export class ValutaService extends AbstractService<ValutaModel, number>  {

  constructor(http: HttpClient) {
    super(http, '/valuta');
  }
}
