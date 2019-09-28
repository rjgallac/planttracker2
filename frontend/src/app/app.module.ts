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
import { ObservationsComponent } from './plants-list/plants/dates/observations/observations.component';
import { MeasurementsComponent } from './plants-list/plants/dates/measurements/measurements.component';
import { PicsComponent } from './plants-list/plants/dates/pics/pics.component';
import { AddPicComponent } from './plants-list/plants/dates/pics/add-pic/add-pic.component';
import { AddMeasurementComponent } from './plants-list/plants/dates/measurements/add-measurement/add-measurement.component';
import { AddObservationComponent } from './plants-list/plants/dates/observations/add-observation/add-observation.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    DatesComponent,
    ActionsComponent,
    PlantsListComponent,
    AddPlantComponent,
    AddActionComponent,
    HomeComponent,
    ObservationsComponent,
    MeasurementsComponent,
    PicsComponent,
    AddPicComponent,
    AddMeasurementComponent,
    AddObservationComponent
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
