import { Component, OnInit } from '@angular/core';
import { PlantsService } from './plants.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';


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
    this.plantsService.getPlant(this.plantId);
    this.plantsService.getPlantObservable().pipe(filter(x=> x!={})).subscribe(data =>{
      console.log(data)
      this.plant = data;
    })
  }

  save(){
    this.plantsService.save()
  }
  public deletePlant() {
    this.plantsService.deletePlant(this.plantId);
    this.router.navigateByUrl('/list');
  }

}
