import { BankCreation } from './../../model/bank.creation';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Bank} from '../../model/bank.model';
import {Pagination} from '../../pagination';
import {BankService} from '../../services/bank.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent extends Pagination<Bank, string> implements OnInit {
  @ViewChild('f') form: NgForm;
  selectedBrRacuna: string;
  constructor(
    public bankService: BankService,
    private toastrService: ToastrService
    ) {
    super(bankService);
  }

  ngOnInit() {
    this.search(0);
  }
  getActionUrl(): string {
    return this.bankService.actionUrl;
  }

  onNovaBankaSubmit(forma: NgForm){
    const banka: BankCreation = new BankCreation(
      forma.value.pib,
      forma.value.naziv,
      forma.value.adresa,
      forma.value.email,
      forma.value.web,
      forma.value.telefon,
      forma.value.fax,
      forma.value.sifraBanke,
      forma.value.swift
    );
    this.bankService.insert(banka).subscribe(
      (data) => {
        this.toastrService.success('Uspesno dodana banka!');
      },
      (event) => {
        this.toastrService.error(event.error);
      }
    );
  }
  downloadXml() {
    this.bankService.downloadXml(this.selectedBrRacuna,
      this.form.controls['start'].value,
      this.form.controls['end'].value).subscribe(
        resp => {}
    );
  }
}
