import { Component, OnInit } from '@angular/core';
import { DrinkersService, Drinker } from '../drinkers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
  drinkerId: number;
  drinkerDetails: Drinker;

  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
    ) { 
      this.route.paramMap.subscribe((paraMap) =>{
        this.drinkerId = +paraMap.get('drinker');

        this.drinkerService.getDrinker(this.drinkerId).subscribe(
          data => {
            this.drinkerDetails = data;
            console.log(data)
        })
      });
    }

  ngOnInit() {
  }

}
