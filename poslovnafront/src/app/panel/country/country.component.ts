import { Component, OnInit, ViewChild, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryModel } from '../../model/country.model';
import { CountryService } from '../../services/country.service';
import { Pagination } from '../../pagination';


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
  @Output() addedCountry: EventEmitter<any> = new EventEmitter();

  constructor(public countryService: CountryService) {
    super(countryService);    
 }

  ngOnInit() {
    this.search(0);
  
  }

  addCountry() {
    const dir: CountryModel = new CountryModel(0, this.form.value['nazivDrzave']);
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
