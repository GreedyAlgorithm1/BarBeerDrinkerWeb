import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DrinkersService, Drinker } from '../drinkers.service';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  drinkers: Drinker[];

  constructor(public drinkersService: DrinkersService) { 
    this.drinkersService.getDrinkers().subscribe(
      data => {
        console.log(data);
        
        this.drinkers = data;
      },
      error => {
        alert("Could not retrieve list of Drinkers.");
      }
    );
  }

  ngOnInit() {
  }
}
