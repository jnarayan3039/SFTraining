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
        git init - This is used for the first time only - This will create a local repositorty for you
        git remote add origin <GIt Repository URL> - This will map the local repository to the actual git hub repository
        
        git add . - this will add all the changes that are not part of the repository to your local repositorty
        git commit -m "COmments" - This will commit the changes to local repository
        git pull origin main - This will pull latest changes from the repository
        git push origin main - This will push your changes to the repository
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
        }
    ];
}