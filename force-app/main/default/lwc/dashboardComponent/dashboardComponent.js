import { LightningElement } from 'lwc';

export default class DashboardComponent extends LightningElement {
    selectedStatDetail = null;

    handleStatClick(event) {
        this.selectedStatDetail = event.detail;
    }

    closeDetailModal() {
        this.selectedStatDetail = null;
    }
}