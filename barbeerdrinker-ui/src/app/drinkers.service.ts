import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker{
  id: number;
  name: string;
  state: string;
  phone: string;
  addr: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(private http: HttpClient) { }
}
