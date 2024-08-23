import { LightningElement } from 'lwc';

export default class Exponentiation extends LightningElement {
    //Javascript Functions
    //Function declaration
    square(x){
        return x*x;
    }

    myFunc(obj){
        obj.make = 'Toyota';
    }

    //Function Expression - unnamed 
    // sqr = function(x){
    //     return x*x;
    // }

    sqr = (x)=> x*x;

    map(func, a){
        let result = [];
        for(let i=0;i<a.length;i++){
            result[i] = func(a[i]);
        }
        return result;
    }

    getScore(){
        let a = 10;
        let b = 20;
        
        function add(){
            return a+b;
        }
        return add();
    }

    // sum(a,b){
    //     return a+b;
    // }

    sum = (a,b,c,...theArgs) => {
            let sum = a+b+c;
                for(let i=0;i<theArgs.length;i++){
                    sum+=theArgs[i];
                }
                return sum;
            }

    connectedCallback(){
        console.log("TEst");
        let x = 10;
        console.log(this.square(x));
        console.log(x);
        let myCar = {make: 'Honda', model:'Odessey',year:2016};
        console.log('before:'+myCar.make);
        this.myFunc(myCar);
        console.log("after:"+myCar.make);
        console.log('Function Expression:'+this.sqr(20) + '\nExample');
        console.log(`Function Expression: ${this.sqr(20)}
                    Example  
                    Example`);

        let inputArray = [1,2,3,4,5];
        let result = this.map(this.square, inputArray);
        console.log(result);
        result = this.map(this.cube, inputArray);
        console.log(result);
        console.log(this.sum(10,20,30));
        console.log(this.sum(10,20,30,40,50));
        console.log(this.getScore());


    }

    // cube(x){
    //     return x*x*x;
    // }

    cube = x => x*x*x;





}