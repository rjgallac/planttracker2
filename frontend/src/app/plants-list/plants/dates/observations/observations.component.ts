import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {

  @Input() observation;
  
  constructor() { }

  ngOnInit() {
  }

}
