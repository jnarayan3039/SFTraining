import { LightningElement,api } from 'lwc';

export default class Modal extends LightningElement {
    @api headTitle = 'Add Task';
    handleCancel(){
        const cancelEvent = new CustomEvent('cancel',{detail:false});
        this.dispatchEvent(cancelEvent);
    }
}