import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  private plants = [
    {
        "name":"plant1",
        "dates":{
            "2019-01-01": {
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
            
            "2019-01-15": {
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
        }
    },
    {
        "name": "plant2",
        "dates":{
            "2019-01-15":{
                "actions": [
                    {
                    "type":"water",
                    "text":"asdf"
                    },
                ]
            },
            "2019-01-30":{
                "actions": []
            }
        }
        
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
  deletePlant(plantId) {
    const plants = this.plants$.getValue();
    plants.splice(plantId, 1);
    console.log(plantId)    
  }
  addItem(id, date, item) {
      console.log(id);
      console.log(date);
      console.log(item);
      const items = this.plants$.getValue()
      const itemdate = items[id].dates[date];
      if(itemdate) {
        itemdate.actions.push(item);
        this.plants$.next(items);
        console.log(date)
      } else {
        const actions =  []
        actions.push(item)
        const plants = this.plants$.getValue()
        plants[id].dates[date] = {actions: actions}
        this.plants$.next(items);
      }
  }
}
