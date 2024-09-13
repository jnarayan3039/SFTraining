import { LightningElement } from 'lwc';

export default class ButtonClickChild extends LightningElement {
    handleClick(event){
        const clickEvent = new CustomEvent('buttonclick');
        this.dispatchEvent(clickEvent);
    }
}