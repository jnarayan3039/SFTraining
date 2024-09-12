import { LightningElement } from 'lwc';

export default class FormHandling extends LightningElement {
    inputValue = '';
    submitted = false;

    handleInputChange(event) {
        this.inputValue = event.target.value;
    }

    handleSubmit() {
        this.submitted = true;
    }
}