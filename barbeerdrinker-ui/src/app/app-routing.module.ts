import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { InsightComponent } from './insight/insight.component';
import { DrinkersComponent } from './drinkers/drinkers.component';

import { ModificationsComponent } from './modifications/modifications.component';

import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { BarsComponent } from './bars/bars.component';

import { VerifyComponent } from './verify/verify.component';
import { VerifyDetailsComponent } from './verify-details/verify-details.component';


const routes: Routes = [
	{
		path: 'static',
		pathMatch: 'full',
		component: WelcomeComponent
	},
	{
		path: 'home',
		pathMatch: 'full',
		component: WelcomeComponent
	},
	{
		path: 'bars',
		pathMatch: 'full',
		component: BarsComponent
	},
	{
    	path: 'bars/:bar',
    	pathMatch: 'full',
    	component: BarDetailsComponent
    },
    {
    	path: 'beers',
    	pathMatch: 'full',
    	component: BeersComponent
    },
    {
    	path:'beers/:beer',
    	pathMatch: 'full',
    	component: BeerDetailsComponent
	},
	{
		path:'drinkers',
		pathMatch: 'full',
		component: DrinkersComponent
	},
	{
		path: 'modifications',
		pathMatch: 'full',
		component: ModificationsComponent
	},
	{

		path: 'drinkers/:drinker',
		pathMatch: 'full',
		component: DrinkerDetailsComponent
	},
	{
    	path: 'insight',
    	pathMatch: 'full',
    	component: InsightComponent

	},
	{
		path: 'verify',
		pathMatch:'full',
		component: VerifyComponent
	},
	{
		path: 'verify/:queryNo',
		pathMatch:'full',
		component: VerifyDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
