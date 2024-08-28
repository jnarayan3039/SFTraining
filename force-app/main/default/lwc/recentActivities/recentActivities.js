import { LightningElement, track } from 'lwc';

export default class RecentActivities extends LightningElement {
    @track activities = [
        { id: 1, description: 'Logged in at 9:00 AM' },
        { id: 2, description: 'Updated profile information' },
        { id: 3, description: 'Completed module 3 in training' },
    ];
}