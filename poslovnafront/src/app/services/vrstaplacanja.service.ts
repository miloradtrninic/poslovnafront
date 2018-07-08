
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountryModel } from '../model/country.model';
import { AbstractService } from './entity-service.service';
import { VrstaPlacanjaModel } from '../model/vrstaplacanja.model';

@Injectable()
export class VrstaPlacanjaService extends AbstractService<VrstaPlacanjaModel, number>  {

  constructor(http: HttpClient) {
    super(http, '/vrstaplacanja');
  }
}
