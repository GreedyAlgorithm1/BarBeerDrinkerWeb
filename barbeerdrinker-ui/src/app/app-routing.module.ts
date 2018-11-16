import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
<<<<<<< HEAD
import { BeersComponent } from './beers/beers.component';
=======
import { DrinkersComponent } from './drinkers/drinkers.component';
>>>>>>> 352b82cf3a35399e283705de7ea6694ccd32e22d

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'bars'
	},
	{
		path: 'bars',
		pathMatch: 'full',
		component : WelcomeComponent
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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
