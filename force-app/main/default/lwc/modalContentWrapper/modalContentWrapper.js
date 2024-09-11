import { LightningElement, api } from 'lwc';

export default class ModalContentWrapper extends LightningElement {
    @api lwcName;

    get isDetailsComponent() {
        return this.lwcName === 'detailsComponent';
    }

    get isSettingsComponent() {
        return this.lwcName === 'settingsComponent';
    }

    get isQuipComponent() {
        return this.lwcName === 'quipDocument';
    }

    get isTaskForm(){
        return this.lwcName === 'taskForm';
    }

    // Add more getters for additional components as needed
}