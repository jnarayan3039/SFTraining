import { LightningElement, api } from 'lwc';

export default class UserCardChild extends LightningElement {
    @api user;

    connectedCallback() {
        console.log('Component is inserted into the DOM');
        console.log('User data:', this.user);
    }

    renderedCallback() {
        console.log('Component has been rendered or rerendered');
    }

    disconnectedCallback() {
        console.log('Component is removed from the DOM');
    }
}