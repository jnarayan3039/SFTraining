import { LightningElement, track } from 'lwc';

export default class StatisticsSummary extends LightningElement {
    @track statistics = [
        { id: 1, label: 'Total Sales', value: '$150,000' },
        { id: 2, label: 'New Leads', value: '120' },
        { id: 3, label: 'Closed Deals', value: '75' }
    ];

    handleStatClick(event) {
        const statId = event.currentTarget.dataset.id;
        const stat = this.statistics.find(stat => stat.id === parseInt(statId, 10));
        this.dispatchEvent(new CustomEvent('statclick', { detail: `Details of ${stat.label}: ${stat.value}` }));
    }
}