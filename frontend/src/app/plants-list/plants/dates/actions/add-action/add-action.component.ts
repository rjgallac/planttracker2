import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../../plants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {
  id;
  date;
  text;
  constructor(private plantService: PlantsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }

  public addItem() {
    const item = {
      "actionType":"WATER"
    }
    this.plantService.addAction(this.id, this.date, item)
    this.router.navigateByUrl('/plant/' + this.id);
  }

}
