import { Component } from '@angular/core';
import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking';
  id: string = null;
  loadingId: string = null;
  isLoading: true | null = null;
  clientInfo: any = null;

  constructor(private bankService: BankService){
    this.bankService.update.subscribe(()=> {
      this._getClientInfo();
    });
  }

  findById() {
    this.loadingId = this.id;
    this._getClientInfo();
  }
  _getClientInfo() {
    this.isLoading = true;
    this.clientInfo = null;
    this.bankService.getClientInfo(this.loadingId).then((response: any)=> {
      this.isLoading = null;console.log(1);
      this.clientInfo = response.message.body;
    });
  }
}
