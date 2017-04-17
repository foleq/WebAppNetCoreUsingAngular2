import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module needed for running Angular websites
import { RouterModule } from '@angular/router';

import { RaceListModule } from './race-list/race-list.module';

import { AppComponent } from './app.component';
import { RacesComponent } from './race-list/races/races.component';
import { DetailComponent } from './race-detail/detail/detail.component';

@NgModule({
    imports: [
        BrowserModule,
        RaceListModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/races', pathMatch: 'full' },
            { path: 'races', component: RacesComponent },
            { path: 'races/:id', component: DetailComponent },
        ])
    ], // Loads required dependencies to launch our app in the browser
    declarations: [
        AppComponent,
        DetailComponent,
    ],
    bootstrap: [AppComponent] // Indicates our root component
})
export class AppModule { }
