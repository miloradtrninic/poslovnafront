import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {ObracunskiRacunBanke} from '../model/obracunskiRacunBanke.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { UkidanjeModel } from '../model/ukidanje.model';



@Injectable({
  providedIn: 'root'
})
export class AccountBalanceService {

  constructor(private httpClient : HttpClient) {
  }
  
  actionUrl = 'http://localhost:8080/api';
  private parseData(res : Response){
    return res.json() || [];
  }


  
  
  addAccountBalance(obracunskiRacunBanke : ObracunskiRacunBanke): Observable<ObracunskiRacunBanke>{
    return  this.httpClient.post<ObracunskiRacunBanke>(this.actionUrl + "/obracunskiRacun/new", obracunskiRacunBanke);
   }

getValute(): Observable<any>{
  return this.httpClient.get(this.actionUrl + "/valuta/all1");
}

getRacuni(): Observable<any>{
  console.log("lalalala")
  return this.httpClient.get(this.actionUrl + "/obracunskiRacun/all");
}


/*removeAccountBalance(obracunskiRacunBanke : any, obracunskiRacunBankeBrisanje : any){
  console.log(obracunskiRacunBanke)
  console.log(obracunskiRacunBankeBrisanje)
  this.httpClient.delete(this.actionUrl + "/obracunskiRacun/transfer/"  + obracunskiRacunBanke + "/" + obracunskiRacunBankeBrisanje).subscribe
  (
    (response) => console.log(response),
    (error) => console.log(error)
  );
  
}*/

removeAccountBalance(ukidanje : UkidanjeModel){

  this.httpClient.post(this.actionUrl + "/obracunskiRacun/transfer",ukidanje).subscribe
  (
    (response) => console.log(response),
    (error) => console.log(error)
  );
}


getReport1(){
  return this.httpClient.get(this.actionUrl + "/obracunskiRacun/izvestaj1");
}

getReport2(){
  return this.httpClient.get(this.actionUrl + "/obracunskiRacun/izvestaj2");
}
   
}
