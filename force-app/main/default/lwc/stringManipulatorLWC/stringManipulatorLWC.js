import { LightningElement } from 'lwc';

export default class StringManipulatorLWC extends LightningElement {
    inputString = '';
    reverseString = '';
    length='';
    upperCaseString='';
    lowerCaseString='';

    handleInputChange(event){
        this.inputString = event.target.value;
        console.log(this.inputString);
    }

    handleReverse(){
        this.reverseString = this.inputString.split('').reverse().join('');
        this.upperCaseString = '';
        this.lowerCaseString='';
        this.length='';
    }

    handleUpperCase(){
        this.upperCaseString = this.inputString.toUpperCase();
        this.reverseString = '';
    }

    handleLowerCase(){
        this.lowerCaseString = this.inputString.toLowerCase();
    }

    findLength(){
        this.length = this.inputString.length;
    }


}