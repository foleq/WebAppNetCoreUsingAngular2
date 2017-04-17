import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module needed for running Angular websites
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './races/race.service';
import { RaceComponent } from './race/race.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ], // Loads required dependencies to launch our app in the browser
    declarations: [
        AppComponent,
        RacesComponent,
        RaceComponent
    ],
    bootstrap: [AppComponent], // Indicates our root component
    providers: [
        RaceService
    ]
})
export class AppModule { }
