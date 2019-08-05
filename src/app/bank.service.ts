import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const ACCOUNT_TYPES = {
  DEPOSIT: "deposit",
  MAIN: "current"
};
let ids = 5;
@Injectable({
  providedIn: 'root'
})
export class BankService {
  // data: any = db();
  update = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  openCurrentAccount(customerId, currentAmmout = 0, accountType) {
    return this.http.post('http://localhost:8080/account/', {customerId, initialCredit: currentAmmout, accountType}).toPromise().then(()=> {
      this.update.emit();
    }).catch((response)=> {
      console.log(response);
    });
  }
  getClientInfo(id) {
   // return Promise.resolve(this.data.find(item=>item.id == id));
	  return this.http.get('http://localhost:8080/customer/' + id).toPromise().catch((response)=> {
      console.log(response);
    });

  }
}

function db() {
  return [{
      id: 1,
      name: "Dan Bitman",
      accounts: [
        {
          id: 0,
          type: ACCOUNT_TYPES.DEPOSIT,
          sold: 100,
        },
        {
          id: 1,
          type: ACCOUNT_TYPES.DEPOSIT,
          sold: 200
        }
      ],
      transactions: [
        {
          fromId: null,
          toId: 0,
          sum: 50,
          date: new Date()
        }
      ]
    },
    { 
      id: 2,
      name: "New Mar",
      accounts: [
        {
          id: 0,
          type: ACCOUNT_TYPES.DEPOSIT,
          sold: 315,
        }
      ],
      transactions: [
        
      ]
    }
  ];
}