import { Component, OnInit } from '@angular/core';
import { DrinkersService, Drinker } from '../drinkers.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction, Bill, BillsTransactionsService } from '../bills-transactions.service';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
  loading: boolean;
  drinkerId: number;
  drinkerName: string;
  drinkerDetails: Drinker;
  transactions: Transaction[];
  bills: Bill[];

  constructor(
    private drinkerService: DrinkersService,
    private billsTransactionsService: BillsTransactionsService,
    private route: ActivatedRoute
    ) { 
      this.route.paramMap.subscribe((paraMap) =>{
        this.drinkerId = +paraMap.get('drinker');

        this.drinkerService.getDrinkersOrders(this.drinkerId).subscribe(
          data =>{
            console.log(data);
    
            const beers = [];
            const counts = [];
    
              data.forEach(order => {
              beers.push(order.beer);
              counts.push(order.beerCount);
            });
    
            this.renderChart(beers, counts);
    
          }
        );

        // was trying to see if I can assign a field and using it in the html
        this.drinkerService.getDrinkerNameById(this.drinkerId).subscribe(
          data => {
            this.drinkerName = data;
            console.log(data)
          }
        );

        this.drinkerService.getDrinker(this.drinkerId).subscribe(
          data => {
            this.drinkerDetails = data;
            console.log(data)
          }
        );

        this.billsTransactionsService.getDrinkersTransactions(this.drinkerId).subscribe(
          data => {
            this.transactions = data;
            console.log(data);
          }
        );

        this.billsTransactionsService.getDrinkersBills(this.drinkerId).subscribe(
          data => {
            this.bills = data;
            console.log(data)
          }
        )

      });
    }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  renderChart(beers: string[], counts: number[]) {
    Highcharts.chart('drinkergraph', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Beers ordered'
      },
      xAxis: {
        categories: beers,
        title: {
          text: 'Beer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount ordered'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }

}
