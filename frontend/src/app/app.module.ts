import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './plants-list/plants/plants.component';
import { DatesComponent } from './plants-list/plants/dates/dates.component';
import { ActionsComponent } from './plants-list/plants/dates/actions/actions.component';
import { FormsModule }   from '@angular/forms';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { AddActionComponent } from './plants-list/plants/dates/actions/add-action/add-action.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    DatesComponent,
    ActionsComponent,
    PlantsListComponent,
    AddPlantComponent,
    AddActionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
