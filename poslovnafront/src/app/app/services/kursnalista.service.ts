import { KursnaListaCreation } from './../../model/kursnaListaCreation.model';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CountryModel } from '../model/country.model';
import { AbstractService } from './entity-service.service';
import { KursnaListaModel } from '../model/kursnalista.model';

@Injectable()
export class KursnaListaService extends AbstractService<KursnaListaCreation, number>  {

  constructor(http: HttpClient) {
    super(http, '/kursnalista');
  }
}
