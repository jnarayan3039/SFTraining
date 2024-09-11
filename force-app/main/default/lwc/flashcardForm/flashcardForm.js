import { LightningElement } from 'lwc';

export default class FlashcardForm extends LightningElement {
    question = '';
    answer = '';
    

    handleQuestionChange(event) {
        this.question = event.target.value;
    }

    handleAnswerChange(event) {
        this.answer = event.target.value;
    }

    handleAdd() {
        console.log(this.question+""+this.answer);
        this.dispatchEvent(new CustomEvent('addflashcard', {
            detail: {
                question: this.question,
                answer: this.answer
            }
        }));
        this.question = '';
        this.answer = '';
    }

    get isFormValid() {
        return this.question !== '' && this.answer !== '';
    }
}