import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../plants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.css']
})
export class AddObservationComponent implements OnInit {
  id;
  date;
  text;

  constructor(private plantService: PlantsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }

  addItem() {
    const item = {
      "type": "OBSERVATION",
      "text":this.text,
      "date": this.date
    }
    this.plantService.addObservation(this.id, item)
    this.router.navigateByUrl('/plant/' + this.id);
  }
}
