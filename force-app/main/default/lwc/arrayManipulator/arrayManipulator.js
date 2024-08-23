import { LightningElement } from 'lwc';

export default class ArrayManipulator extends LightningElement {
    inputArray = [];
    inputString = "";
    sortedString = "";
    length=0;
    evenNumbers ="";
    oddNumbers="";

    handleInputChange(event){
        this.inputString = event.target.value;
        this.inputArray = this.inputString.split(",");
        console.log(this.inputArray);
    }

    handleSort(){
        this.sortedString = this.inputArray.sort((a,b)=>a-b).join(",");
    }

    
    handleEvenNumbers(){
        let even = this.inputArray.filter(num=>num % 2 === 0);
        console.log(even);
        this.evenNumbers = this.inputArray.filter(num=>num%2==0).join(",");
   }
    

   handleOddNumbers(){
        this.oddNumbers = this.inputArray.filter(number=>number%2!=0).join(",");
    }

    findLength(){
        this.length = this.inputArray.length;
    }

}