import { LightningElement } from 'lwc';

export default class DynamicChildRendering extends LightningElement {
    showComponentA = true;
    toggleComponent(){
        this.showComponentA= !this.showComponentA;
    }
}