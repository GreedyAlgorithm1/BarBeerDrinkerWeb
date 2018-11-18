import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Result{
	result:string;
}

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) { }

  verifyQuery(queryNo:number){
  	return this.http.get<Result[]>('/api/verify/' +queryNo);
  }
  
}
