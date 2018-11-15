import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface BeerLocation{
	id: number;
	bar: string;
	price: number;
	customers: number;

}
@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  getBarsSelling(beer:string){
  	return this.http.get<BeerLocation[]>('/api/bars-selling/' +beer);
  }

  getBeerManufacturers(beer?: string): any{
  	if (beer){
<<<<<<< HEAD
			console.error(beer)
=======
>>>>>>> 60814d969cd5518d605981ef9424ef35163fc9f8
  		return this.http.get<string>('/api/beer-manufacturer/' +beer);
  	}
  	return this.http.get<string[]>('/api/beer-manufacturer');

  }

}
