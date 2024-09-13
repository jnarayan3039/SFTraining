import { LightningElement } from 'lwc';

export default class CounterParent extends LightningElement {
    clickCount = 0;
    handleClick(event){
        this.clickCount++;
    }

}