import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../../plants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pic',
  templateUrl: './add-pic.component.html',
  styleUrls: ['./add-pic.component.css']
})
export class AddPicComponent implements OnInit {

  constructor(private plantService: PlantsService, private route: ActivatedRoute) { }
  selectedFile = null;
  id;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

  }
  onFileSelected(event){
    console.log(event)
    this.selectedFile = event.target.files[0];
    var file= event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      console.log(reader.result);
      const item = {
        "type": "PIC",
        "pic": reader.result,
        "date": new Date()
      }
      this.plantService.addPic(this.id, item)
    });

    reader.readAsDataURL(file);

  }

}
