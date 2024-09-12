import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showMessage = false;

    handleToggle() {
        this.showMessage = !this.showMessage;
    }
}