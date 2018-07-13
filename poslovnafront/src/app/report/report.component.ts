import { Component, OnInit } from '@angular/core';
import { AccountBalanceService } from '../services/account-balance.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private accountService : AccountBalanceService) { }

  ngOnInit() {
  }


  getReport1(){
    this.accountService.getReport1().subscribe();
  }

  getReport2(){
    this.accountService.getReport2().subscribe();
  }
}
