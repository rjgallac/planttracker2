import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {


  @Input() measurement;
  
  constructor() { }

  ngOnInit() {
  }
  
  addItem() {

  }

}
