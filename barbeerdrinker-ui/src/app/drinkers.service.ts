import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker{
  id: number;
  name: string;
  state: string;
  phone: string;
  address: string;
}

export interface LikesBeer{
  id: number;
  name: string;
  manf: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(public http: HttpClient) { }

  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
  }

  getDrinker(drinker: number){
    return this.http.get<Drinker>('/api/drinker/' +drinker);
  }

  getDrinkerNameById(drinker_id: number){
    return this.http.get<string>('/api/drinkerNameById/' +drinker_id);
  }

  // Might have to be rewritted because database somehow gets the name but we dont have to send it in...
  getDrinkerLikes(drinker: string){
    return this.http.get<LikesBeer[]>('api/likes');
  }
}
