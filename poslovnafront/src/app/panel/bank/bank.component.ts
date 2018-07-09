import { Component, OnInit } from '@angular/core';
import {Bank} from '../../model/bank.model';
import {Pagination} from '../../pagination';
import {BankService} from '../../services/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent extends Pagination<Bank, string> implements OnInit {

  constructor(public bankService: BankService) {
    super(bankService);
  }

  ngOnInit() {
  }

}
