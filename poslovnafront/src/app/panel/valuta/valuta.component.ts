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
        console.log(params['drzava']);
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
    this.eForm.controls['domaca'].setValue(selected.domaca);
    this.selected = selected;
  }

  public firstPage() {
    if (this.sifraDrzave === '') {
      this.search(0);
    } else {
      this.search('drzavaSifraDrzave=' + this.sifraDrzave);
    }
  }

  public lastPage() {
    if (this.sifraDrzave === '') {
      this.search(this.pageset.totalPages - 1);
    } else {
      this.search('drzavaSifraDrzave=' + this.sifraDrzave);
    }
  }

  public nextPage() {
    if (this.sifraDrzave === '') {
      this.search(this.page + 1);
    } else {
      this.search('drzavaSifraDrzave=' + this.sifraDrzave);
    }
  }

  public previousPage() {
    if (this.sifraDrzave === '') {
      this.search(this.page - 1);
    } else {
      this.search('drzavaSifraDrzave=' + this.sifraDrzave);
    }
  }

  public goToPage(n: number) {
    if (this.sifraDrzave === '') {
      this.search(n);
    } else {
      this.search('drzavaSifraDrzave=' + this.sifraDrzave);
    }
  }

}
