import { LightningElement, track } from 'lwc';

export default class FlashcardApp extends LightningElement {
    showAddCard = false;
    @track flashcards = [
        { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
        { id: 2, question: 'What is 2 + 2?', answer: '4' }
    ];

    handleAddFlashcard(event) {
        console.log("test"+event.detail.question+" "+event.detail.answer);
        const newFlashcard = {
            id: this.flashcards.length + 1,
            question: event.detail.question,
            answer: event.detail.answer
        };
        this.flashcards = [...this.flashcards, newFlashcard];
        this.showAddCard=false;
    }

    handleAddCard(event){
        this.showAddCard=true;
    }

    handleCancel(event){
        this.showAddCard=false;
    }

    handleDeleteFlashcard(event) {
        this.flashcards = this.flashcards.filter(flashcard => flashcard.id !== event.detail.id);
    }
}