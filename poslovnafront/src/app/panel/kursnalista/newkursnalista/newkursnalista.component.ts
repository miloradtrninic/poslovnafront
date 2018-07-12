import { Pagination } from './../../../app/pagination';
import { KursValutaCreation } from './../../../model/kursValutaCreation.model';
import { KursnaListaService } from './../../../app/services/kursnalista.service';
import { KursnaListaCreation } from './../../../model/kursnaListaCreation.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '../../../../../node_modules/@angular/common';


@Component({
  selector: 'app-newkursnalista',
  templateUrl: './newkursnalista.component.html',
  styleUrls: ['./newkursnalista.component.css']
})
export class NewkursnalistaComponent extends Pagination<KursnaListaCreation, number> implements OnInit {
  private kursnaLista: KursnaListaCreation = new KursnaListaCreation(new Date, '', []);

  constructor(
    public kursnaListaService: KursnaListaService,
    public location: Location
  ) {
      super(kursnaListaService);
   }


  onNewKursnaListaSubmit(forma: NgForm){
    this.kursnaLista.PIB = forma.value.pib;
    this.kursnaLista.primenjujeSeOd = forma.value.primenjujeSeOd;
    this.kursnaListaService.insert(this.kursnaLista).subscribe();
    this.location.back();
  }

  onNewValutaSubmit(forma: NgForm){
    console.log(forma.value.srednji)
    let kursValuta: KursValutaCreation = new KursValutaCreation(
      forma.value.kupovni,
      forma.value.srednji,
      forma.value.prodajni,
      forma.value.osnovna,
      forma.value.prema
    );
    this.kursnaLista.valute.push(kursValuta);
    console.log(this.kursnaLista.valute);
  }
  ngOnInit() {
  }

}
