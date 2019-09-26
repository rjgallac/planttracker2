import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private plants = [
    {
        "name":"plant1",
        "dates":[
            {
                "date":"1/1/2019",
                "actions": [
                    {
                        "type":"water",
                        "text":"asdf"
                    },
                    {
                        "type":"fertilize",
                        "text":"ffffff"
                    }
                ]
            },
            {
                "date":"15/1/2019",
                "actions": [
                    {
                        "type":"water",
                        "text":"asdf"
                    },
                    {
                        "type":"fertilize",
                        "text":"ffffff"
                    }
                ]
            }
        ]
    },
    {
        "name": "plant2",
        "dates":[
            {
                "date":"15/1/2019",
                "actions": [
                    {
                        "type":"water",
                        "text":"asdf"
                    },
                ]
            },
            {
                "date":"30/1/2019",
                "actions": []
            }
        ]
    },
    {
        "name": "plant3",
        "dates":[]
    },
    {
        "name": "plant4",
        "dates":[]
    }
]
  constructor() { }
  getplants(){
    return this.plants;
  }
  addPlant(plantName){
      this.plants.push( {
            "name":plantName,
            "dates":[]
        }
    )
  }
}
