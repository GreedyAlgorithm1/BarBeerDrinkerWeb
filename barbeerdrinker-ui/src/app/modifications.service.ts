import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Modification{
	result: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationsService {

  constructor(private http: HttpClient) { }
  
  getMod(){
  	return this.http.get<Modification[]>('/api/modifications/');
  }
 
}
