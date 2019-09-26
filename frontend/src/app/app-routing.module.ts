import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { AddItemComponent } from './add-item/add-item.component';

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
  },
  {
    path: 'plant/:id/additem',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
