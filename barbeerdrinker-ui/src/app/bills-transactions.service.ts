import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bill{
  billId: number;
  barId: number;
  drinkerId: number;
  timeIssued: number;
  item: string;
  quantity: number;
  price: number;
}

export interface Transaction{
  transactionId: number;
  barId: number;
  drinkerId: number;
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class BillsTransactionsService {

  constructor(private http: HttpClient) { }

  getBills(){

  }

  getTransactions(){

  }

  getDrinkersBills(drinker_id: number){
    return this.http.get<Bill[]>('/api/bills/' +drinker_id);
  }

  getDrinkersTransactions(drinker_id: number){
    return this.http.get<Transaction[]>('/api/transactions/' +drinker_id);
  }
}
