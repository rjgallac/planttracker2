import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../plants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-measurement',
  templateUrl: './add-measurement.component.html',
  styleUrls: ['./add-measurement.component.css']
})
export class AddMeasurementComponent implements OnInit {

  id;
  date;
  measurement;
  measurementType;

  constructor(private plantService: PlantsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }

  addItem() {
    const item = {
      "type": "MEASUREMENT",
      "measurement":this.measurement,
      "measurementType": this.measurementType,
      "date": this.date
    }
    this.plantService.addMeasurement(this.id, item)
    this.router.navigateByUrl('/plant/' + this.id);
  }

}
