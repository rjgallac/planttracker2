import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants/plants.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {

  constructor(private plantService: PlantsService) { }

  ngOnInit() {
  }
  getPlants(){
    return this.plantService.getPlants();
  }

}
