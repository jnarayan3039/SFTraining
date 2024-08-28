import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track greeting = {
        firstName: "Jayaprakash",
        lastName: "Thatiparthi"
    }

    greeting1 = 'Text';
    
    connectedCallback(){
        this.displayGreeting =`${this.greeting.firstName} ${this.greeting.lastName}`;
    }

    handleFistNameChange(event){
        this.greeting.firstName = event.target.value;
    }

    handleLastNameChange(event){
        this.greeting.lastName = event.target.value;
    }
    handleChange(event){
        this.greeting1 = event.target.value;
    }

    
    

}