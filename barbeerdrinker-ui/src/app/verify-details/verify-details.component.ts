import { Component, OnInit } from '@angular/core';
import { VerifyService, Result } from '../verify.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-verify-details',
  templateUrl: './verify-details.component.html',
  styleUrls: ['./verify-details.component.css']
})


export class VerifyDetailsComponent implements OnInit {
	inputQuery: number;
	finResult: Result[];

  constructor( private vService: VerifyService, 
  			  private route: ActivatedRoute ) { 
  
  		this.route.paramMap.subscribe((paramMap)=>{
  			this.inputQuery = +paramMap.get('queryNo');

  			this.vService.verifyQuery(this.inputQuery).subscribe(
  				data => {
  					this.finResult = data;
            alert(data)
  				}
  			);

  		});
  	
  }

  ngOnInit() {
  }

}
