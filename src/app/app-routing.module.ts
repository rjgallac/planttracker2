import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';

const routes: Routes = [
  {
    path: '',
    component: PlantsComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
