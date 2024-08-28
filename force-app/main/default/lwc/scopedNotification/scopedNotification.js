import { LightningElement, api } from 'lwc';

export default class ScopedNotification extends LightningElement {
    @api message="It looks as if duplicates exist for this lead."
    @api theme="";

    get scopedNotificationClass(){
        let className = "slds-scoped-notification slds-media slds-media_center";
        if(this.theme==="light"){
            className+="slds-scoped-notification_light";
        
        }
        if(this.theme==="dark"){
            className+="slds-scoped-notification_dark";
        }
        return className;
        
    }

    get iconVariant(){
        let iconVariant = null;

        if(this.theme==="dark"){
            iconVariant = "inverse"
        }
        return iconVariant;
    }

}