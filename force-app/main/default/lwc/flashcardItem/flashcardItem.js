import { LightningElement, api, track } from 'lwc';

export default class FlashcardItem extends LightningElement {
    @api flashcard;
    @track isFlipped = false;

    get flipCardClass() {
        return this.isFlipped ? 'flashcard flip' : 'flashcard';
    }

    handleFlip() {
        this.isFlipped = !this.isFlipped;
    }

    handleDelete() {
        this.dispatchEvent(new CustomEvent('delete', {
            detail: this.flashcard.id
        }));
    }
}