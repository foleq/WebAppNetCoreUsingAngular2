import { Injectable } from '@angular/core';
import { CarPart } from './car-part';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() 
export class RacingDataService {

    constructor(private http: Http) {
    } 

    getCarParts() {
        return this.http.get('assets/car-parts.json')
            .map(response => <CarPart[]>response.json().data);
    }
}
