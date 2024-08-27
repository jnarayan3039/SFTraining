import { LightningElement, track } from 'lwc';

export default class TrackedObjectExample extends LightningElement {
    // Using @track to make the entire object reactive
    userDetails = {
        firstName: 'John',
        lastName: 'Doe'
    };

    handleFirstNameChange(event) {
        // Update the firstName property of the userDetails object
        this.userDetails.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        // Update the lastName property of the userDetails object
        this.userDetails.lastName = event.target.value;
    }
}