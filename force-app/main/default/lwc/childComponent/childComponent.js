import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api showHeader = false;
    @api showFooter = false;
}