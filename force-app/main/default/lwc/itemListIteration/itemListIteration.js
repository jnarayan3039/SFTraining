import { LightningElement } from 'lwc';

export default class ItemListIteration extends LightningElement {
    items = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 }
    ];

    addItem() {
        const newItem = { id: Date.now(), name: `Item ${this.items.length + 1}`, price: Math.floor(Math.random() * 100) };
        this.items = [...this.items, newItem];
    }

    removeItem(event) {
        const itemId = event.target.dataset.id;
        this.items = this.items.filter(item => item.id !== parseInt(itemId));
    }
}