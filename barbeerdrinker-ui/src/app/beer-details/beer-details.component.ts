import { Component, OnInit } from '@angular/core';
import { BeersService, BeerLocation } from '../beers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

	beerName: string;
	beerLocations: BeerLocation[];
	manufacturer: string;

  constructor(
		private beerService: BeersService,
		private route: ActivatedRoute
  	) { 
  		this.route.paramMap.subscribe((paramMap) => {
  			this.beerName = paramMap.get('beer');

  			this.beerService.getBarsSelling(this.beerName).subscribe(
  				data =>{
  					this.beerLocations = data;
  				} 
  			);

  			this.beerService.getBeerManufacturers(this.beerName).subscribe(
          		data => {
					   this.manufacturer = data;
          		}
        	);

  		});
  	}

  ngOnInit() {
  }

}
