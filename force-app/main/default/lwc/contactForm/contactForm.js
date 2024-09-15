import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactForm extends LightningElement {
    @api contactId;
    contactFields = ['FirstName', 'LastName', 'Email', 'Phone'];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
                title: 'Success',
                message: 'Contact is successfully updated',
                variant: 'success',
        });
        this.dispatchEvent(toastEvent);
        const closeEvent = new CustomEvent('close',{detail:false});
        this.dispatchEvent(closeEvent);
    }

}