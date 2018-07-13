import { Component, OnInit } from '@angular/core';
import {ObracunskiRacunBanke} from '../model/obracunskiRacunBanke.model';
import {NgForm} from '@angular/forms';
import { UkidanjeModel } from '../model/ukidanje.model';
import { ValutaModel } from '../model/valuta.model';
import { AccountBalanceService } from '../services/account-balance.service';


@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css']
})
export class AccountBalanceComponent implements OnInit {

  valute : Array<ValutaModel>
  valuta : ValutaModel
  racuni : Array<ObracunskiRacunBanke>
  racuniBez : Array<ObracunskiRacunBanke>
  racun : ObracunskiRacunBanke
  ukidanje : UkidanjeModel
  constructor(private accountService : AccountBalanceService) {
    this.valute = [];
    this.racuni = [];
    this.racuniBez = [];
    this.racun = new ObracunskiRacunBanke();
    this.ukidanje = new UkidanjeModel();
   }
   

  ngOnInit() {

   this.accountService.getValute().subscribe(
     (data: Array<ValutaModel>) =>{
       this.valute = data
      } 
   );

   this.accountService.getRacuni().subscribe(
    (data: Array<ObracunskiRacunBanke>) =>{
      this.racuni = data
     } 
  );

  }

  onSubmit(obracun: ObracunskiRacunBanke, form: NgForm){
    console.log(obracun.valutaSifra)
    if(obracun.valutaSifra == ""){
      obracun.valutaSifra = this.valuta.sifra
    }
    this.accountService.addAccountBalance(obracun).subscribe
    (
      (response: ObracunskiRacunBanke) => {
       this.racuni.push(response);
      }
      ,
      (error) => console.log(error)
    );

     
  }
 
  remove(brojRacuna : string){
    
    this.accountService.getRacuni().subscribe(
      (data: Array<ObracunskiRacunBanke>) =>{
        console.log(data);
        this.racuni = data
        this.racuni.forEach(element => {
          if(element.brojRacuna != brojRacuna){
            this.racuniBez.push(element);
          }else{
            this.racun = element
            console.log(this.racun)
          
          }
        });
       console.log(this.racuniBez);
       }
      ); 
      console.log(this.racun)
  }
  transfer(brojRacuna : any, form: NgForm){
    console.log(brojRacuna)
    this.ukidanje.naRacun = brojRacuna.racun;
    this.ukidanje.ukidaSe = this.racun.brojRacuna
    this.accountService.removeAccountBalance(this.ukidanje);
    
  }

  RowSelected(u : any){
    console.log(u);
    this.valuta = u;
  }

  
}
