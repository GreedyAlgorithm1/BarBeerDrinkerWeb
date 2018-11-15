import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarsService, Bar } from '../bars.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {
	barId: number;
	barDetails: Bar;
	menu: BarMenuItem[];
	foodMenu: BarFoodItem[];

  constructor(
  	private barService: BarsService,
  	private route: ActivatedRoute
  ) { 
  		route.paramMap.subscribe((paramMap) =>{
  			this.barId = +paramMap.get('bar');

  			barService.getBar(this.barId).subscribe(
  				data => {
  					console.log(data)
  					this.barDetails = data;
  				},
  				(error:HttpResponse<any>) =>{
  					if(error.status === 404){
  						alert('Bar not found.');
  					}
  					else {
  						console.error(error.status + ' - ' + error.body);
  						alert('An error has occurred on the server. Please check browser console.');
  					}

  				}
  			);

  			barService.getMenu(this.barId).subscribe(
  				data => {
  					this.menu = data;

  				}
  			);

  			barService.getFoodMenu(this.barId).subscribe(
  				data => {
  					this.foodMenu = data;

  				}

  			);


  		});
  } 

  ngOnInit() {
  }

}
