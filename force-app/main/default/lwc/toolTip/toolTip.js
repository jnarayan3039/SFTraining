import { LightningElement, api } from 'lwc';

export default class CustomTooltip extends LightningElement {
    @api tooltipText = 'This is a tooltip with an image.'; // Default tooltip text
    @api imageUrl = 'https://via.placeholder.com/100'; // Default image URL
}