import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface BeerLocation{
	id: number;
	bar: string;
	price: number;
	customers: number;
}

export interface Beer{
  id: number;
  name: string;
  manf: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  getBeers() {
    return this.http.get<Beer[]>('/api/beer');
  }

  getBarsSelling(beer:string){
  	return this.http.get<BeerLocation[]>('/api/bars-selling/' +beer);
  }

  getBeerManufacturers(beer?: string): any{
  	if (beer){
  		return this.http.get<string>('/api/beer-manufacturer/' +beer);
  	}
  	return this.http.get<string[]>('/api/beer-manufacturer');

  }

}
