import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination } from '../../pagination';
import {ValutaModel} from '../../model/valuta.model';
import {ValutaService} from '../../services/valuta.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-valuta',
  templateUrl: './valuta.component.html',
  styleUrls: ['./valuta.component.css']
})
export class ValutaComponent extends Pagination<ValutaModel, number> implements OnInit {

  selected: ValutaModel;
  sifraDrzave: string;
  @ViewChild('editForm') eForm: NgForm;
  constructor(public valutaService: ValutaService,  private route: ActivatedRoute) {
    super(valutaService);
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['drzava'] === '' || params['drzava'] === undefined) {

          this.sifraDrzave = '';
          this.search(0);
        } else {
          this.sifraDrzave = params['drzava'];
          this.search(0, 'drzavaSifraDrzave=' + this.sifraDrzave);
        }
      }
    );
  }

  fillField(selected) {
    this.eForm.controls['naziv'].setValue(selected.naziv);
    this.eForm.controls['sifra'].setValue(selected.sifra);
    this.selected = selected;
  }

}
