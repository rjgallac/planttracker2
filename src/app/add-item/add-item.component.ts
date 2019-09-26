import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../plants/plants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  id;
  date;
  text;
  constructor(private plantService: PlantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }

  public addItem() {
    const item = {
      "type":"water",
      "text":this.text
    }
    this.plantService.addItem(this.id, this.date, item)
  }

}
