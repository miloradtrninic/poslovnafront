import {Component, OnInit, ViewChild} from '@angular/core';
import {Bank} from '../../model/bank.model';
import {Pagination} from '../../pagination';
import {BankService} from '../../services/bank.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent extends Pagination<Bank, string> implements OnInit {
  @ViewChild('f') form: NgForm;
  selectedBrRacuna: string;
  constructor(public bankService: BankService) {
    super(bankService);
  }

  ngOnInit() {
    this.search(0);
  }
  getActionUrl(): string {
    return this.bankService.actionUrl;
  }
  downloadXml() {
    this.bankService.downloadXml(this.selectedBrRacuna,
      this.form.controls['start'].value,
      this.form.controls['end'].value).subscribe(
        resp => {}
    );
  }
}
