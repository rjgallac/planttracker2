import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlantsService {
    private plants = [{
        "id": 0,
        "name": "plant1",
        "dates": {
            "2019-01-01": {
                "observations": [{
                    "text": "asdf"
                }],
                "measurements": [{
                    "measurementType": "WATER",
                    "text": ""
                }, {
                    "measurementType": "HEIGHT",
                    "text": "100mm"
                }],
                "actions": [{
                    "actionType": "WATER"
                }],
                "pics": []
            }
        }
    }, {
        "id": 1,
        "name": "plant2",
        "dates": {
            "2019-09-26": {
                "observations": [{
                    "text": "asdf"
                }],
                "measurements": [{
                    "measurementType": "WATER",
                    "text": ""
                }, {
                    "measurementType": "HEIGHT",
                    "text": "100mm"
                }],
                "actions": [{
                    "actionType": "WATER"
                }],
                "pics": []
            },
            "2019-01-01": {
                "observations": [{
                    "text": "asdf"
                }],
                "measurements": [{
                    "measurementType": "WATER",
                    "text": ""
                }, {
                    "measurementType": "HEIGHT",
                    "text": "100mm"
                }],
                "actions": [{
                    "actionType": "WATER"
                }],
                "pics": []
            }
        }
    }];
    private plants$: BehaviorSubject<any[]> = new BehaviorSubject([]);
    private plant$: BehaviorSubject<any> = new BehaviorSubject({});
    private request = window.indexedDB.open("planttracker", 1);
    private db;

    constructor(private http: HttpClient) {
        this.getAllPlants();

        if(window.indexedDB){
            console.log('IndexedDB is supported');
        }

        this.request.onsuccess =  (event) => {
            this.db = this.request.result;
            console.log('The database is opened successfully');
            this.request.onupgradeneeded = (event) => {
                var objectStore = this.db.createObjectStore("plants", {keyPath: "id"});
             }
        
        };
        this.request.onupgradeneeded = function(event) {
            //@ts-ignore
            const db = event.target.result; 
            const store = db.createObjectStore('plants', {keyPath: 'id'});
        };

    }

    save(){

        var request = this.db.transaction(['plants'], 'readwrite')
        .objectStore('plants')
        .add(this.plants[0]);
    
      request.onsuccess = function (event) {
        console.log('The data has been written successfully');
      };
    }

    public getPlant(index) {
        this.plants$.subscribe(data =>{
            console.log(data)
            const value = data[index]
            if(value){
                this.plant$.next(value);
            }
        })
    }

    getPlants() {
        return this.plants$.asObservable();
    }
    getPlantObservable(){
        return this.plant$.asObservable();
    }
    getAllPlants() {
        this.plants$.next(this.plants);
    }
    addPlant(plantName) {
        this.plants$.getValue().push({
            "name": plantName,
            "dates": []
        }
        )
    }
    deletePlant(plantId) {
        const plants = this.plants$.getValue();
        plants.splice(plantId, 1);
        console.log(plantId)
        this.plants$.next(plants);
    }
    addAction(id, date, item) {
        console.log(id);
        console.log(date);
        console.log(item);
        const items = this.plants$.getValue()
        const itemdate = items[id].dates[date];
        if (itemdate) {
            itemdate.actions.push(item);
            this.plants$.next(items);
            console.log(date)
        } else {
            const actions = []
            actions.push(item)
            const plants = this.plants$.getValue()
            plants[id].dates[date] = { actions: actions }
            this.plants$.next(items);
        }
    }
}
