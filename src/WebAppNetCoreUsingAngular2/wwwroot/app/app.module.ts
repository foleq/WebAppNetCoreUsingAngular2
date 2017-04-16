﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module needed for running Angular websites
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts.component';
import { RacingDataService } from './racing-data.service';

@NgModule({
    imports: [BrowserModule, FormsModule], // Loads required dependencies to launch our app in the browser
    declarations: [
        AppComponent,
        CarPartsComponent
    ],
    bootstrap: [AppComponent], // Indicates our root component
    providers: [RacingDataService]
})
export class AppModule { }
