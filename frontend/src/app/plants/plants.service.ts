import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlantsService {

    private plants$: BehaviorSubject<any[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {
        this.getAllPlants();
    }

    public getPlant(index) {
        return this.plants$.getValue()[index];
    }

    getPlants() {
        return this.plants$.asObservable();
    }
    getAllPlants() {
        this.http.get<any[]>("http://127.0.0.1:8080/plants").subscribe(data => {
            this.plants$.next(data);
        })
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
    addItem(id, date, item) {
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
