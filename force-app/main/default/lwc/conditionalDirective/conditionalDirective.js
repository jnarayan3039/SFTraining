import { LightningElement } from 'lwc';

export default class ConditionalDirective extends LightningElement {

    inputNumber=0;
    show = true;
    even = true;
    handleInputChange(event){
        this.inputNumber = event.target.value;

        if(this.inputNumber%2==0){
            this.even=true;
        }else{
            this.even=false;
        }
    }

    handleShowHide(event){
        if(this.show){
            this.show=false;
        }else{
            this.show=true;
        } 
    }
}