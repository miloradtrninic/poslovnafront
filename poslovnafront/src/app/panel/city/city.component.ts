import { Component, OnInit,ViewChild, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../pagination';
import { CityModel } from '../../model/city.model';
import { NgForm } from '@angular/forms';
import { CityService } from '../../services/city.service';

 @Component({
   selector: 'app-city',
   templateUrl: './city.component.html',
   styleUrls: ['./city.component.css']
 })

export class CityComponent extends Pagination<CityModel, string> implements OnInit {

  naziv = '';
  message: string;
  selected: CityModel;
  @ViewChild('addForm') form: NgForm;
  @ViewChild('editForm') eForm: NgForm;
  @Output() addedCity: EventEmitter<any> = new EventEmitter();

  constructor(public cityService: CityService ) {
    super(cityService);
 }
   ngOnInit() {
    this.search(0);
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
 }
