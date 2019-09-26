import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plants;
  plantno = 0;
  plantName = "";

  constructor(private plantsService: PlantsService) { }

  ngOnInit() {
    console.log("HERE")
    this.plants=this.plantsService.getplants();
    console.log(this.plants)
  }
  previous(){
    this.plantno--;
  }
  next(){
    this.plantno++;
  }
  addPlant(){
    this.plantsService.addPlant(this.plantName);
  }

}
