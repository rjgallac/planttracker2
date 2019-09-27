import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants-list/plants/plants.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { AddActionComponent } from './plants-list/plants/dates/actions/add-action/add-action.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
