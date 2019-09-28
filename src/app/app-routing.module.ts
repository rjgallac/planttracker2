import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants-list/plants/plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { AddActionComponent } from './plants-list/plants/dates/actions/add-action/add-action.component';
import { AddObservationComponent } from './plants-list/plants/dates/observations/add-observation/add-observation.component';
import { AddMeasurementComponent } from './plants-list/plants/dates/measurements/add-measurement/add-measurement.component';
import { AddPicComponent } from './plants-list/plants/dates/pics/add-pic/add-pic.component';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'list',
    component: PlantsListComponent
  },
  {
    path: 'plant/:id',
    component: PlantsComponent
  },
  {
    path: 'addplant',
    component: AddPlantComponent
  },
  {
    path: 'plant/:id/addaction',
    component: AddActionComponent
  },
  {
    path: 'plant/:id/addobservation',
    component: AddObservationComponent
  },
  {
    path: 'plant/:id/addmeasurement',
    component: AddMeasurementComponent
  },
  {
    path: 'plant/:id/addpic',
    component: AddPicComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
