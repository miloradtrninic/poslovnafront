import { Component, OnInit } from '@angular/core';
import {ObracunskiRacunBanke} from '../model/obracunskiRacunBanke.model';
import {NgForm} from '@angular/forms';
import {AccountBalanceService} from '../account-balance.service';
import {Valuta} from '../model/valuta.model'
import{Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';


@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent implements OnInit {

  valute : Array<Valuta>
  racuni : Array<ObracunskiRacunBanke>
  constructor(private accountService : AccountBalanceService) {
    this.valute = [];
    this.racuni = [];
   }

  ngOnInit() {

   this.accountService.getValute().subscribe(
     (data: Array<Valuta>) =>{
       console.log(data);
       this.valute = data
      console.log(this.valute);
      } 
   );

   this.accountService.getRacuni().subscribe(
    (data: Array<ObracunskiRacunBanke>) =>{
      console.log(data);
      this.racuni = data
     console.log(this.racuni);
     } 
  );

  }

  onSubmit(obracun: ObracunskiRacunBanke, form: NgForm){
    
    this.accountService.addAccountBalance(obracun);
    this.accountService.getRacuni().subscribe(
      (data: Array<ObracunskiRacunBanke>) =>{
        console.log(data);
        this.racuni = data
       console.log(this.racuni);
       }
      ); 
  }
 
  remove(brojRacuna : string){
    alert(brojRacuna)
  }
  

}
