import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ModificationsService, Modification } from '../modifications.service';
import { SelectItem } from 'primeng/components/common/selectitem';


@Component({
  selector: 'app-modifications',
  templateUrl: './modifications.component.html',
  styleUrls: ['./modifications.component.css']
})
export class ModificationsComponent implements OnInit {
	result: Modification[];


  constructor(private modify: ModificationsService) {
  	this.getMod();   		
  	}

  ngOnInit() { }

  getMod(){
  	this.modify.getMod().subscribe(
  		data => {
  			this.result = data;
  			alert(data)
  		}
  	)
  }

}
