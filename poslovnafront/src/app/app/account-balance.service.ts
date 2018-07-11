import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http,Response} from '@angular/http';
import {ObracunskiRacunBanke} from '../app/model/obracunskiRacunBanke.model';
import {Valuta} from '../app/model/valuta.model';
import {Observable} from 'rxjs/Observable';
import {AccountBalanceComponent} from '../app/account-balance/account-balance.component'
import 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class AccountBalanceService {

  constructor(private http : Http, private httpClient : HttpClient) {
  }
  
  actionUrl = 'http://localhost:4444/api';
  private parseData(res : Response){
    return res.json() || [];
  }


  
  
  addAccountBalance(obracunskiRacunBanke : ObracunskiRacunBanke){
      this.httpClient.post(this.actionUrl + "/obracunskiRacun/new", obracunskiRacunBanke).subscribe
      (
        (response) => console.log(response),
        (error) => console.log(error)
      );

   }

getValute(): Observable<any>{
  return this.httpClient.get(this.actionUrl + "/valuta/all1");
}

getRacuni(): Observable<any>{
  return this.httpClient.get(this.actionUrl + "/obracunskiRacun/all");
}


   
}
