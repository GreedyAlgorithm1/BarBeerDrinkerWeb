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

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
  public http: HttpClient
  ) { }

getBars(){
	return this.http.get<Bar[]>('/api/bar');
}

getBar(bar:number){
	
	return this.http.get<Bar>('/api/bar/'+bar)
}
}
