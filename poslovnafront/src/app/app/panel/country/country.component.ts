import { Component, OnInit, ViewChild, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryModel } from '../../model/country.model';
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  name = '';
  message: string;
  @ViewChild('addForm') form: NgForm;
  @ViewChild('editForm') eForm: NgForm;
  @Output() addedCountry: EventEmitter<any> = new EventEmitter();
  constructor(public countryService: CountryService) { }

  ngOnInit() {
    console.log('ngOnInit country list');
  
  }

  addCountry() {
    const dir: CountryModel = new CountryModel(0, this.form.value['name']);
    console.log('aaaaaaaaaaaaaaaaaaaaaaa');
    this.countryService.insert(dir).subscribe(
      resp => {
        this.addedCountry.emit(resp);
     //   this.countries = resp;
      }, error => {
        this.message = JSON.stringify(error);
      }
    );
  }
}
