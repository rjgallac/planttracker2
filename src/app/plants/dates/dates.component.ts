import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  @Input() dates;

  constructor() { }

  ngOnInit() {
  }

}
