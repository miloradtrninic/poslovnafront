import { Component, OnInit, ViewChild, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryModel } from '../../model/country.model';
import { CountryService } from '../../services/country.service';
import { Pagination } from '../../pagination';
import {CityModel} from '../../model/city.model';
import {CityService} from '../../services/city.service';
import {CityCreation} from '../../model/city.creation';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent extends Pagination<CountryModel, string> implements OnInit {
  nazivDrzave = '';
  message: string;
  selected: CountryModel;
  @ViewChild('addForm') form: NgForm;
  @ViewChild('editForm') eForm: NgForm;
  @ViewChild('addCityF') addCityForm: NgForm;
  @Output() addedCountry: EventEmitter<any> = new EventEmitter();
  constructor(public countryService: CountryService, private cityService: CityService, private toast: ToastrService) {
        super(countryService);
   }

  ngOnInit() {

    this.search(0);

  }

  addCountry() {
    const dir: CountryModel = new CountryModel(this.form.value['sifraDrzave'], this.form.value['nazivDrzave']);
    this.countryService.insert(dir).subscribe(
      resp => {
        this.pageset.content.push(resp);
        this.addedCountry.emit(resp);
     //   this.countries = resp;
      }, error => {
        this.message = JSON.stringify(error);
      }
    );
  }
  addCity() {
    const dir: CityCreation = new CityCreation(this.addCityForm.value['sifraGrada'], this.addCityForm.value['nazivGrada'],
                                  this.addCityForm.value['pttOznaka'], this.selected.sifraDrzave);
    this.cityService.insert(dir).subscribe(
    resp => {
      this.toast.success('Grad dodat.');
    }, error => {
      this.message = JSON.stringify(error);
      this.toast.error(this.message);
    }
  );
  }

  fillField(selected) {
        this.eForm.controls['nazivDrzave'].setValue(selected.nazivDrzave);
        this.selected = selected;
      }

  editCountry() {
    this.selected.nazivDrzave = this.eForm.controls['nazivDrzave'].value;
    this.countryService.update(this.selected).subscribe(
      resp => {
        console.log(resp);
      }, error => {
        this.message = JSON.stringify(error);
      }
    );
  }
}
