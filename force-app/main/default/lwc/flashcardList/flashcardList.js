import { LightningElement, track, wire, api } from 'lwc';
import getCustomSettings from '@salesforce/apex/FlashcardController.getFlashcardButtonConfigurations';

export default class FlashcardList extends LightningElement {
    @api flashcards;

    @track isModalOpen = false;
    @track selectedModalComponent = '';
    @track buttonConfigurations = [];

    @wire(getCustomSettings)
    wiredSettings({ error, data }) {
        if (data) {
            this.buttonConfigurations = data;
            console.log(JSON.stringify(this.buttonConfigurations));
        } else if (error) {
            console.error('Error fetching custom metadata:', error);
        }
    }

    handleOpenModal(event) {
        this.selectedModalComponent = event.target.dataset.component;
        this.isModalOpen = true;
    }

    handleCloseModal() {
        this.isModalOpen = false;
        this.selectedModalComponent = '';
    }

    handleDelete(event) {
        const flashcardId = event.detail;
        this.flashcards = this.flashcards.filter(flashcard => flashcard.id !== flashcardId);
    }
}