
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractService } from './entity-service.service';
import { CityModel } from '../model/city.model';

@Injectable()
export class CityService extends AbstractService<CityModel, number>  {

  constructor(http: HttpClient) {
    super(http, '/naseljenomesto');
  }
}
