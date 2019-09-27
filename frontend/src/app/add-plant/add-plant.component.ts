import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../plants-list/plants/plants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.css']
})
export class AddPlantComponent implements OnInit {
  plantName;
  constructor(private plantService: PlantsService, private router: Router) { }

  ngOnInit() {
  }
  addPlant() {
    this.plantService.addPlant(this.plantName);
    this.router.navigateByUrl('/list');

  }

}
