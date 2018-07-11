
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractService } from './entity-service.service';
import { CityModel } from '../model/city.model';

@Injectable({
  providedIn: 'root'
  })
  
export class CityService extends AbstractService<CityModel, string>  {

  constructor(protected http: HttpClient) {
    super(http, '/naseljenomesto');
  }
}
