import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bar{
	id: number;
	name: string;
	state: string;
	open: number;
	close: number;
	license: string;
	phone: string;
	address: string;

}

export interface BarMenuItem{
	id: number;
	beer: string;
	manf: string;
	price: number;
	liked: number;
}

export interface BarFoodItem{
	item: string;
	price: number;
}

export interface BarSellsItem{
	barId: string;
	barName: string;
	itemName: string;
	price: number;
}

export interface BarSellsBeer{
	barId: string;
	barName: string;
	beerName: string;
	price: number;
}

@Injectable({
  providedIn: 'root'
})

export class BarsService {

  constructor(public http: HttpClient) { }

	getBars(){
		return this.http.get<Bar[]>('/api/bar');
	}

	getBar(bar:number){	
		return this.http.get<Bar>('/api/bar/'+bar);
	}

	getBarsSellingBeers(){
		return this.http.get<BarSellsBeer[]>('/api/getBarsSellingBeers');
	}

	getBarsSellingItems(){
		return this.http.get<BarSellsItem[]>('/api/getBarsSellingItems');
	}

	getMenu(bar:number){
		return this.http.get<BarMenuItem[]>('/api/menu/' +bar);
	}

	getFoodMenu(bar:number){
		return this.http.get<BarFoodItem[]>('/api/menu2/' +bar);
	}

	getFrequentCounts() {
    	return this.http.get<any[]>('/api/frequents-data');
  	}
}
