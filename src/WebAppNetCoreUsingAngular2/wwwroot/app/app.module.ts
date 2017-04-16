import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module needed for running Angular websites
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule], // Loads required dependencies to launch our app in the browser
    declarations: [AppComponent],
    bootstrap: [AppComponent] // Indicates our root component
})
export class AppModule { }
