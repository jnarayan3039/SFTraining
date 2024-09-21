import { LightningElement, api } from 'lwc';

export default class ColorConfigurableComponent extends LightningElement {
    @api backgroundColor ;  // Default background color
    @api fontColor ;        // Default font color

    renderedCallback() {
       this.template.querySelector('lightning-card').style.setProperty("--my-bg-color", this.backgroundColor);
       this.template.querySelector('lightning-card').style.setProperty("--my-font-color", this.fontColor);
    }
    
}