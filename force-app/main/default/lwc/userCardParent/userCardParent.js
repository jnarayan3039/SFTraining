import { LightningElement } from 'lwc';

export default class UserCardParent extends LightningElement {
    user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin'
    };

    changeUser() {
        this.user = {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            role: 'User'
        };
    }
}