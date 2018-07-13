import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../pagination';
import { KursnaListaCreation } from '../../../model/kursnaListaCreation.model';
import { KursnaListaService } from '../../../services/kursnalista.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { KursValutaCreation } from '../../../model/kursValutaCreation.model';
import { Location } from '../../../../../node_modules/@angular/common';
@Component({
  selector: 'app-novakursnalista',
  templateUrl: './novakursnalista.component.html',
  styleUrls: ['./novakursnalista.component.css']
})
export class NovakursnalistaComponent extends Pagination<KursnaListaCreation, number> implements OnInit {
  private kursnaLista: KursnaListaCreation = new KursnaListaCreation(new Date,'', '', []);
  constructor(
    public kursnaListaService: KursnaListaService,
    public location: Location
  ) {
    super(kursnaListaService);
  }
  onNewKursnaListaSubmit(forma: NgForm){
        this.kursnaLista.pib = forma.value.pib;
        this.kursnaLista.naziv = forma.value.naziv;
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
