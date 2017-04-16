import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';

@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls: ['app/car-parts.component.css']
})
export class CarPartsComponent {

    carParts: CarPart[];

    // invoked after the component is constructed and 
    // is the best place to initialize property values
    ngOnInit() {
        this.carParts = CARPARTS;
    }

    downQuantity(carPart) {
        if (carPart.quantity != 0) {
            carPart.quantity--;
        }
    }

    upQuantity(carPart: CarPart) {
        if (carPart.quantity < carPart.inStock) {
            carPart.quantity++;
        }
    }

    totalCarParts() {
        let sum = 0;
        for (let carPart of this.carParts) {
            sum += carPart.inStock;
        }
        return sum;
        // return this.carParts.reduce((prev, current) => prev + current.inStock, 0); // Simplifer
    }

    showKey(event) {
        alert(event.keyCode);
    }

    getCoord(event) {
        console.log(event.clientX + ", " + event.clientY);
    }
}