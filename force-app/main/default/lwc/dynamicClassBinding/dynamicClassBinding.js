import { LightningElement } from 'lwc';

export default class DynamicClassBinding extends LightningElement {
    isActive = false;

    get dynamicClass() {
        return this.isActive ? 'active' : 'inactive';
    }

    toggleClass() {
        this.isActive = !this.isActive;
    }
}