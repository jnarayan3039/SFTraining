import { LightningElement } from 'lwc';

export default class ProductListParent extends LightningElement {
    products = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Smartphone', price: 700 },
        { id: 3, name: 'Tablet', price: 500 }
    ];
}