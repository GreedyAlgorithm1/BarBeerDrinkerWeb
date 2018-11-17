import { Component, OnInit } from '@angular/core';
import { BeersService, BeerLocation } from '../beers.service';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

	beerName: string;
	beerLocations: BeerLocation[];
	manufacturer: string;

  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

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
            console.log(data);
          	}
        	);

          this.filterOptions = [
            {
              'label': 'Low > High',
              'value': 'low price' 
            },
            {
              'label': 'High > Low',
              'value': 'high price'
            },
            {
              'label': 'Most frequented',
              'value': 'high customer'
            },
            {
              'label': 'Least frequented',
              'value': 'low customer'
            }
          ];

  		});
  	}

  ngOnInit() {
  }

  sortBy(selectedOption: string) {

    if (selectedOption === 'low price') {
      this.beerLocations.sort((a, b) => {
        return a.price - b.price;
      });    
    } 

    else if (selectedOption === 'high price') {
      this.beerLocations.sort((a, b) => {
        return b.price - a.price;
      });
    } 
    else if (selectedOption === 'low customer') {
      this.beerLocations.sort((a, b) => {
        return a.customers - b.customers;
      });
    } 
    else if (selectedOption === 'high customer') {
      this.beerLocations.sort((a, b) => {
        return b.customers - a.customers;
      });

    }

  }

}
