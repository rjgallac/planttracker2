import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlantsService {
    private plants$: BehaviorSubject<any[]> = new BehaviorSubject([]);
    private plant$: BehaviorSubject<any> = new BehaviorSubject({});
    private request;
    private db;

    constructor(private http: HttpClient) {
        // this.getAllPlants();
        this.request = window.indexedDB.open("planttracker", 1);
        if(window.indexedDB){
            console.log('IndexedDB is supported');
        }
        this.request.onerror = function(event) {
            // Do something with request.errorCode!
            console.log(event)
          };
        this.request.onsuccess =  (event) => {
            this.db = this.request.result;
            console.log('The database is opened successfully');
            var transaction = this.db.transaction('plants', 'readwrite');
            transaction.onsuccess = function(event) {
                console.log('[Transaction] ALL DONE!');
            };
            var plants = transaction.objectStore('plants');
            const plantsresult = plants.getAll()
            plantsresult.onsuccess = () =>{
                console.log(plantsresult.result)
                this.plants$.next(plantsresult.result);
            }


        };
        this.request.onupgradeneeded = function(event) {
            //@ts-ignore
            const db = event.target.result; 
            const store = db.createObjectStore('plants', {keyPath: 'id'});
            console.log("CREATED");
            
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

    addPlant(plantName) {
        const currentListOfPlants = this.plants$.getValue();
        const newPlant = {
            "id": this.uuidv4(),
            "name": plantName,
            "dates": []
        }
        currentListOfPlants.push(newPlant)
        this.save(newPlant)
    }

    save(plant){
        var request = this.db.transaction(['plants'], 'readwrite')
        .objectStore('plants')
        .add(plant);
    
      request.onsuccess = function (event) {
        console.log('The data has been written successfully');
      };
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
      }
    deletePlant(plantIndex, plantId) {
        var transaction = this.db.transaction('plants', 'readwrite');
        var plantsStore = transaction.objectStore('plants');
        var request = plantsStore.delete(plantId);
        const plants = this.plants$.getValue();
        plants.splice(plantIndex, 1);
        console.log(plantIndex)
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
        this.updatePlantInDB(items[id]);
    }
    addPic(id, date, pic){
        const plants = this.plants$.getValue()
        const itemdate = plants[id].dates[date];
        if (itemdate) {
            itemdate.actions.push(pic);
            this.plants$.next(plants);
            console.log(date)
        }else{
            const pics = [];
            pics.push(pic)
            plants[id].dates[date] = { pics: pics }
            console.log(pic);
        }
        this.updatePlantInDB(plants[id]);

    }
    updatePlantInDB(plant){
        console.log(plant)
        var transaction = this.db.transaction('plants', 'readwrite');
        var plantsStore: IDBObjectStore = transaction.objectStore('plants');
        var request = plantsStore.put(plant);
    }
}
