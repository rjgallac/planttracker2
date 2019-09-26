import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
    private plants$: BehaviorSubject<any[]> = new BehaviorSubject(this.plants);

  constructor() { }

    public getPlant(index){
        return this.plants$.getValue()[index];
    }

  getPlants(){
    return this.plants$.asObservable();
  }
  addPlant(plantName){
      this.plants$.getValue().push( {
            "name":plantName,
            "dates":[]
        }
    )
  }
}
