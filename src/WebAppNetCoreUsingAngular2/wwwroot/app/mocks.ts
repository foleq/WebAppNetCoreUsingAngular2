import { CarPart } from './car-part';

export const CARPARTS: CarPart[] = [{
    id: 1,
    name: "Super Tires",
    description: "These tires are the very best",
    inStock: 5,
    price: 4.99,
    image: "/images/daytona_thunderdome.jpg",
    featured: false
},
{
    id: 2,
    name: "Reinforced Shocks",
    description: "Shocks made from kryptonite",
    inStock: 4,
    price: 9.99,
    image: "/images/san_francisco_ruins.jpg",
    featured: true
},
{
    id: 3,
    name: "Test",
    description: "Test description",
    inStock: 0,
    price: 3.99,
    image: "/images/new_york_city_skyline.jpg",
    featured: false
}];