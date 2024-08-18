import { LightningElement,track } from 'lwc';

export default class DisplayContacts extends LightningElement {
    /*
        List<String> names = new List<String>();
        names[0] = 'Jayaprakash';
        names[1] = 100;
        Version Control System 
        Git and GitHub
        Developer 1, Developer 2, Developer 3
        Branch1, Branch2, Branch3
    */
    @track contacts=[
        {
            "FirstName":"Jayaprakash",
            "LastName": "Thatiparthi",
            "Email":"jp.narayan@gmail.com",
            "Phone":"4153613379",
        },
        {
            "FirstName":"Samana",
            "LastName": "Thatiparthi",
            "Email":"samana@gmail.com",
            "Phone":"2123312322"
        },
        {
            "FirstName":"Sathwika",
            "LastName": "Thatiparthi",
            "Email":"st@gmail.com",
            "Phone":"2131241424"
        },
        {
            "FirstName":"Ananya",
            "LastName": "Kulkarni",
            "Email":"ak@gmail.com",
            "Phone":"12313215545"
        },
        {
            "abc":"xyz"
        }

    ];
}