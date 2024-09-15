import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactInfo extends LightningElement {
    contacts = [];
    selectedContact;
    showForm = false;
    //Id, Name, Title, Phone, Email
    columns = [
        {
            label: 'Id',
            fieldName: 'Id',
            type: 'text',
        },
        {
            label: 'Name',
            fieldName: 'Name',
            type: 'text',
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'tel',
        },
        {
            label: 'Email',
            fieldName: 'Email',
            type: 'email',
        },
    ]

    searchText;

    handleChange(event){
        this.searchText = event.target.value;
    setTimeout(()=>{        
            
            console.log(this.searchText);
            getContacts({searchText: this.searchText})
            .then(result => {
                this.contacts = result;
            });
            console.log(JSON.stringify(this.contacts));
        }, 300);

    }

    handleRowSelection(event){
        console.log(JSON.stringify(event.detail.selectedRows[0]));
        this.selectedContact = event.detail.selectedRows[0];
        console.log(JSON.stringify(this.selectedContact));
        console.log(this.selectedContact.Id);
    }

    handleClick(){
        this.showForm=true;
    }

    handleCancel(event){
        this.showForm = event.target.detail;
    }

    handleClose(event){
        this.showForm = event.target.detail;
    }
}