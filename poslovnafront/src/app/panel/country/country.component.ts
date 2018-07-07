import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  name = '';
  @ViewChild('addForm') form: NgForm;
  @ViewChild('editForm') eForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

}
