import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  plant;

  plantId;

  constructor(private plantsService: PlantsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.plantId = this.route.snapshot.params["id"];
    this.plant = this.plantsService.getPlant(this.plantId);
  }

  public deletePlant() {
    this.plantsService.deletePlant(this.plantId);
    this.router.navigateByUrl('/list');
  }

}
