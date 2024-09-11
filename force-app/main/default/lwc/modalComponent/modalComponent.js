import { LightningElement } from 'lwc';

export default class ModalComponent extends LightningElement {
    handleClose() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}