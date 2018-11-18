import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ModificationsService, Modification } from '../modifications.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { DrinkersService, Drinker, DrinkerFrequents, DrinkerLikesBeer } from '../drinkers.service';
import { BeersService, Beer } from '../beers.service';
import { BarsService, Bar, BarSellsItem, BarSellsBeer } from '../bars.service';
import { Transaction, Bill, BillsTransactionsService } from '../bills-transactions.service';


@Component({
  selector: 'app-modifications',
  templateUrl: './modifications.component.html',
  styleUrls: ['./modifications.component.css']
})
export class ModificationsComponent implements OnInit {
	loading: boolean;
	result: Modification[];
	beers: Beer[];
	bars: Bar[];
	drinkers: Drinker[];
	frequents: DrinkerFrequents[];
	likes: DrinkerLikesBeer[];
	sellsBeers: BarSellsBeer[];
	sellsItems: BarSellsItem[];
	transactions: Transaction[];
	bills: Bill[];

  constructor(
		private modify: ModificationsService,
		private beerService: BeersService,
		private barService: BarsService,
		private drinkerService: DrinkersService,
		private billsTransactionService: BillsTransactionsService
		) {
		this.getBeers();
		this.getBars();
		this.getDrinkers();
		this.getDrinkersFrequentingBars();
		this.getDrinkersLikingBeers();
		this.getBarsSellingBeers();
		this.getBarsSellingItems();
		this.getTransactions();
		this.getBills();
  	//this.getMod();   		
  	}

  ngOnInit() { this.loading = true;
    setTimeout(() => {
      this.loading = false;
		}, 1000);
	}

	getBeers(){
		this.beerService.getBeers().subscribe(
			data => {
				this.beers = data;
				console.log(data);
			}
		);
	}

	getBars(){
		this.barService.getBars().subscribe(
			data => {
				this.bars = data;
			}
		);
	}

	getDrinkers(){
		this.drinkerService.getDrinkers().subscribe(
			data => {
				this.drinkers = data;
			}
		);
	}

	getDrinkersFrequentingBars(){
		this.drinkerService.getDrinkersFrequentingBars().subscribe(
			data => {
				this.frequents = data;
			}
		);
	}

	getDrinkersLikingBeers(){
		this.drinkerService.getDrinkersLikingBeers().subscribe(
			data => {
				this.likes = data;
			}
		);
	}

	getBarsSellingBeers(){
		this.barService.getBarsSellingBeers().subscribe(
			data => {
				this.sellsBeers = data;
				console.log(data);
			}
		);
	}

	getBarsSellingItems(){
			this.barService.getBarsSellingItems().subscribe(
				data => {
					this.sellsItems = data;
				}
			);
	}

	getTransactions(){
		this.billsTransactionService.getTransactions().subscribe(
			data => {
				this.transactions = data;
			}
		);
	}

	getBills(){
		this.billsTransactionService.getBills().subscribe(
			data => {
				this.bills = data;
			}
		);
	}
	

  getMod(){
  	this.modify.getMod().subscribe(
  		data => {
  			this.result = data;
  			alert(data)
  		}
  	);
  }

}
