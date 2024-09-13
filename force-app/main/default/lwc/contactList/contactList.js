import { LightningElement, track } from 'lwc';

export default class ContactList extends LightningElement {
    @track contacts = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    

}