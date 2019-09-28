import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  @Input() pic;


  constructor() {  }

  ngOnInit() {
  }

}
