import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Pagination} from '../../pagination';
import {CityModel} from '../../model/city.model';
import {NgForm} from '@angular/forms';
import {CityService} from '../../services/city.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent extends Pagination<CityModel, string> implements OnInit {

  naziv = '';
  message: string;
  selected: CityModel;
  sifraDrzave: string;
  @ViewChild('addForm') form: NgForm;
  @ViewChild('editForm') eForm: NgForm;
  @Output() addedCity: EventEmitter<any> = new EventEmitter();

  constructor(public cityService: CityService, private route: ActivatedRoute) {
    super(cityService);
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log('param' + params['drzava']);
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

  addCountry() {
    /*const dir: CityModel = new CityModel(0, this.form.value['naziv']);
    this.cityService.insert(dir).subscribe(
      resp => {
        this.pageset.content.push(resp);
        this.addedCity.emit(resp);
      }, error => {
        this.message = JSON.stringify(error);
      }
    );*/
  }

  fillField(selected) {
    this.eForm.controls['naziv'].setValue(selected.naziv);
    this.selected = selected;
  }

  editCity() {
    this.selected.naziv = this.eForm.controls['naziv'].value;
    this.cityService.update(this.selected).subscribe(
      resp => {
        console.log(resp);
      }, error => {
        this.message = JSON.stringify(error);
      }
    );
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
