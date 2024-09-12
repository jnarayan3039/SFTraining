import { LightningElement } from 'lwc';

export default class DisplaySlotConditionally extends LightningElement {
    showHeader = true;
    showFooter = true;

    toggleHeader(){
        this.showHeader = !this.showHeader;
    }

    toggleFooter(){
        this.showFooter = !this.showFooter;
    }
}