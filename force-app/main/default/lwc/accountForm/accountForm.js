import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountForm extends LightningElement {
    @api recordId;

    handleSuccess(event){
        console.log("In Success");
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Account is successfully updated',
        });
        this.dispatchEvent(evt);
    }

    handleError(event){
        const evt = new ShowToastEvent({
            title: 'Error',
            message: 'Failed to Update',
            variant: 'error',
        });
        this.dispatchEvent(evt);
    }

}