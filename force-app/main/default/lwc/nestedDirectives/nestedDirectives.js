import { LightningElement } from 'lwc';

export default class NestedDirectives extends LightningElement {
    categories = [
        {
            id: 1,
            name: 'Category 1',
            isVisible: false,
            items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]
        },
        {
            id: 2,
            name: 'Category 2',
            isVisible: false,
            items: [{ id: 3, name: 'Item 3' }, { id: 4, name: 'Item 4' }]
        }
    ];

    toggleCategory(event) {
        const categoryId = event.target.dataset.id;
        this.categories = this.categories.map(category => {
            if (category.id === parseInt(categoryId)) {
                return { ...category, isVisible: !category.isVisible };
            }
            return category;
        });
    }
}