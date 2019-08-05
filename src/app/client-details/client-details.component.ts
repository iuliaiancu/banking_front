import { Component, OnInit, Input } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() clientId;
  @Input() clientInfo;
  showCurrencyPopup = false;
  constructor(private bankService: BankService) { }

  ngOnInit() {
  }
  
  createCurrentAccount(data) {
    this.bankService.openCurrentAccount(this.clientId, data.initialDeposit, data.accountType);
    this.showCurrencyPopup = false;
  }
}
