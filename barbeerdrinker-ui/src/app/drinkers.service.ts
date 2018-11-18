import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Drinker{
  id: number;
  name: string;
  state: string;
  phone: string;
  address: string;
}

export interface DrinkerLikesBeer{
  drinkerId: number;
  drinkerName: string;
  beerName: string;
}

export interface DrinkerFrequents{
  drinkerId: number;
  drinkerName: string;
  barId: number;
  barName: string;
  state: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(public http: HttpClient) { }

  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker');
  }

  getDrinker(drinker_id: number){
    return this.http.get<Drinker>('/api/drinker/' +drinker_id);
  }

  getDrinkerNameById(drinker_id: number){
    return this.http.get<string>('/api/drinkerNameById/' +drinker_id);
  }

  // Might have to be rewritted because database somehow gets the name but we dont have to send it in...
  getDrinkerLikes(drinker: string){
    return this.http.get<DrinkerLikesBeer[]>('api/likes');
  }

  getDrinkersLikingBeers(){
    return this.http.get<DrinkerLikesBeer[]>('/api/getDrinkersLikingBeers');
  }

  getDrinkersFrequentingBars(){
    return this.http.get<DrinkerFrequents[]>('/api/getDrinkersFrequentingBars');
  }

  getDrinkersOrders(drinker_id: number){
    return this.http.get<any[]>('/api/drinkersOrders/' +drinker_id);
  }
}
