import { Injectable } from '@angular/core';
import {AbstractService} from './entity-service.service';
import {Bank} from '../model/bank.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService extends AbstractService<Bank, string> {

  constructor(protected http: HttpClient) {
    super(http, '/banka');
  }
}
