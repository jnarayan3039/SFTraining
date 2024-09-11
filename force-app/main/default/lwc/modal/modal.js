import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    handleCancel(){
        const cancelEvent = new CustomEvent('cancel',{detail:false});
        this.dispatchEvent(cancelEvent);
    }
}