import { Component, OnInit, Input } from '@angular/core';
import { RacesComponent } from '../races/races.component';

@Component({
    selector: 'race',
    templateUrl: 'app/race-list/race/race.component.html',
    styleUrls: ['app/race-list/race/race.component.css']
})
export class RaceComponent implements OnInit {

    @Input() race;

    constructor(private racesComponent: RacesComponent) { }

    ngOnInit() {
    }

    castDate(date) {
        return new Date(date);
    }

    enterRace() {
        this.racesComponent.enterRace(this.race);
    }

    cancelRace() {
        this.racesComponent.cancelRace(this.race);
    }
}