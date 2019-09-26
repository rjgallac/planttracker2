import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../plants/plants.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  plantName;
  constructor(private plantService: PlantsService) { }

  ngOnInit() {
  }
  addPlant() {
    this.plantService.addPlant(this.plantName);
  }

}
