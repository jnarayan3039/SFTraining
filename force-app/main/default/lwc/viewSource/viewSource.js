import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
        'https://github.com/jnarayan3039/SFTraining/tree/master/force-app/main/default/';

    @api source;
    @api infoUrl;

    connectedCallback(){
        if(this.infoUrl!=''){
            this.showInfo = true;
        }
    }

    get sourceURL() {
        return this.baseURL + this.source;
    }
}