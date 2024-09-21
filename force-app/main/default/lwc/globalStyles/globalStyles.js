import { LightningElement } from 'lwc';
import { loadStyle} from 'lightning/platformResourceLoader';
import myStyles from '@salesforce/resourceUrl/myStyles';

export default class GlobalStyles extends LightningElement {

    helpText = `LWC is built on the principle of encapsulation, but there may be cases where you want to apply global styles that affect multiple components. In LWC, global styles (styles that affect multiple components) are typically handled through:
    1.	SLDS (Salesforce Lightning Design System):
	•	SLDS is a global design system used across Salesforce to ensure consistency.
	•	You can use SLDS utility classes (e.g., slds-p-around_small, slds-grid) in your LWC components, and these classes are globally available across the application.
	2.	Static Resources:
	•	If you need to define global styles for custom elements, you can upload a custom CSS file as a static resource and include it in your LWC components using the @import rule. These only work in the Synthetic shadow that Salesforce uses, once Salesforce gets rid of the Synthetic Shadow the global styles may be impacted.`
    loadStyles(){
        loadStyle(this, myStyles);
    }

}