import { LightningElement, track } from 'lwc';

export default class UserProfile extends LightningElement {
    @track user = {
        name: 'Jayaprakash Thatiparthi',
        email: 'jp.narayan@gmail.com',
        profilePicture: 'https://energy-flow-2669-dev-ed.scratch.my.salesforce.com/servlet/servlet.FileDownload?file=0158I000000tY2r'
    };
}