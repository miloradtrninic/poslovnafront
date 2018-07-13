import { Injectable } from '@angular/core';
import {AbstractService} from './entity-service.service';
import {Bank} from '../model/bank.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService extends AbstractService<Bank, string> {

  constructor(protected http: HttpClient) {
    super(http, '/banka');
  }

  downloadXml(brojRacuna: string, pocetak: string, kraj: string) {
    return this.http.get(this.actionUrl +
      '/izvod?pocetak=' + pocetak + '&kraj=' + kraj + '&brojRacuna=' + brojRacuna);
  }
}
