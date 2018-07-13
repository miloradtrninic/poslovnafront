import { Component, OnInit, ViewChild } from '@angular/core';
import { Pagination } from '../../pagination';
import { NgForm } from '@angular/forms';
import { VrstaPlacanjaService } from '../../services/vrstaplacanja.service';
import { VrstaPlacanjaModel } from '../../model/vrstaplacanja.model';

@Component({
  selector: 'app-vrstaplacanja',
  templateUrl: './vrstaplacanja.component.html',
  styleUrls: ['./vrstaplacanja.component.css']
})
export class VrstaplacanjaComponent extends Pagination<VrstaPlacanjaModel, number> implements OnInit {
  nazivVrstePlacanja = '';
  message: string;
  selected: VrstaPlacanjaModel;
  @ViewChild('addForm') form: NgForm;
  @ViewChild('editForm') eForm: NgForm;
  constructor(public vrstaPlacanjaService: VrstaPlacanjaService) {
    super(vrstaPlacanjaService);
  }

  ngOnInit() {
    this.search(0);
  }

  add() {
    const dir: VrstaPlacanjaModel = new VrstaPlacanjaModel(this.form.value['nazivVrstePlacanja']);
    this.vrstaPlacanjaService.insert(dir).subscribe(
      resp => {
        this.pageset.content.push(resp);
      }, error => {
        this.message = JSON.stringify(error);
      }
    );
  }

  fillField(selected) {
    this.eForm.controls['nazivVrstePlacanja'].setValue(selected.nazivVrstePlacanja);
    this.selected = selected;
  }

   edit() {
        this.selected.nazivVrstePlacanja = this.eForm.controls['nazivVrstePlacanja'].value;
        this.vrstaPlacanjaService.update(this.selected).subscribe(
          resp => {
            console.log(resp);
          }, error => {
            this.message = JSON.stringify(error);
        }
      );
    }
}
