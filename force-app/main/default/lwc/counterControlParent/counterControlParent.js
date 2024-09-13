import { LightningElement } from 'lwc';

export default class CounterControlParent extends LightningElement {
    counter = 0;

    handleIncrement() {
        this.counter += 1;
    }

    handleDecrement() {
        this.counter -= 1;
    }
}