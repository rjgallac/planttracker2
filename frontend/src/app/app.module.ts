import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { DatesComponent } from './plants/dates/dates.component';
import { ActionsComponent } from './plants/dates/actions/actions.component';
import { FormsModule }   from '@angular/forms';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import { AddItemComponent } from './add-item/add-item.component';
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
    AddItemComponent,
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
