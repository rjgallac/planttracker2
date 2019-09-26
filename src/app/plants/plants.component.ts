import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plant;

  plantid;

  constructor(private plantsService: PlantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params["id"];
    console.log("HERE"+ id)
    // this.plants=this.plantsService.getplants();
    this.plantid = id;
    this.plant = this.plantsService.getPlant(id);
  }

}
