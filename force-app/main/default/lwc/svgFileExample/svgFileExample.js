import { LightningElement } from 'lwc';
import svgIcon from './svgFileExample.svg'; // Import the SVG file

export default class SvgFileExample extends LightningElement {
    svgIconUrl = svgIcon; // Store the SVG URL

    handleMouseOver() {
        const svgElement = this.template.querySelector('img');
        svgElement.style.filter = 'brightness(1.5)'; // Change brightness on hover
    }

    handleMouseOut() {
        const svgElement = this.template.querySelector('img');
        svgElement.style.filter = 'brightness(1)'; // Revert brightness on mouse out
    }
}