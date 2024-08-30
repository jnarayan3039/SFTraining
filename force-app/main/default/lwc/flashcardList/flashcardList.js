import { LightningElement, api } from 'lwc';

export default class FlashcardList extends LightningElement {
    @api flashcards;

    handleDelete(event) {
        const flashcardId = event.detail;
        this.dispatchEvent(new CustomEvent('deleteflashcard', {
            detail: { id: flashcardId }
        }));
    }
}