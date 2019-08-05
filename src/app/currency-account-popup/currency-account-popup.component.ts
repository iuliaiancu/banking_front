import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-account-popup',
  templateUrl: './currency-account-popup.component.html',
  styleUrls: ['./currency-account-popup.component.css']
})
export class CurrencyAccountPopupComponent implements OnInit {

  depositAmmout = 0;
  accountType = "DEFAULT_ACCOUNT";
  @Output() create = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
