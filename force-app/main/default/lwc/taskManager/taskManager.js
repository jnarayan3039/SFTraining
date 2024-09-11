import { LightningElement,track,api, wire} from 'lwc';
import getTasks from '@salesforce/apex/TaskManagerController.getTasks';
export default class TaskManager extends LightningElement {
    @api recordId;
    tasks;
    error;
    showAddTask = false;
    showInlineEdit = false;
    selectedRows = [];
    inlineEditRow = {
            Subject:'',
            Status:'',
            Priority:'',
            WhatId:'',
            WhoId:'',
    };
    connectedCallback(){
        console.log(this.recordId);
    }
    @wire(getTasks, { accountId: '$recordId' })
    wiredTasks({ error, data }) {
        console.log('error:'+error);
        console.log('data:'+JSON.stringify(data));
        if (data) {
            this.tasks = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.tasks = undefined;
        }
    }

    // @track tasks = [
    //     {
    //         Subject: "Call back customer",
    //         Description: "Had a call with customer and customer has asked to call back after few hours",
    //         DueDate: "Today",
    //         Contact: "James Callahan",
    //         Phone: "41527912310",
    //         Email: "abc@xyz.com",
    //     },
    //     {
    //         Subject: "Send Email with update on enquiry",
    //         Description: "Customer requested for an update about the discount on product that we discussed",
    //         DueDate: "Today",
    //         Contact: "John Harp",
    //         Phone: "12313215125",
    //         Email: "xyz@xyz.com"
    //     }

    // ];
    columns = [
        {label:'Subject',fieldName:'Subject'},
        {label:'Status',fieldName:'Status'},
        {label:'Priority',fieldName:'Priority'},
        {label:'WhatId',fieldName:'WhatId'},
        {label:'WhoId',fieldName:'WhoId'},
        // {label:'Email',fieldName:'Email'},
        {label:'Delete',fieldName:'delete',type:'button-icon',
            typeAttributes: 
            {
            iconName: 'utility:delete',
            name: 'delete',
            title: 'Delete',
            variant: 'border-filled',
            alternativeText: 'Delete',
            }
        },
        {label:'Edit',fieldName:'edit',type:'button-icon',
            typeAttributes: 
            {
            iconName: 'utility:edit',
            name: 'edit',
            title: 'Edit',
            variant: 'border-filled',
            alternativeText: 'Edit',
            }
        }
    ];

    handleAddTask(event){
        this.inlineEditRow = {
            Subject:'',
            Status:'',
            Priority:'',
            WhatId:'',
            WhoId:'',
        };
        this.showAddTask = true;
    }

    handleCancel(event){
        if(this.inlineEditRow.Subject!=''){
            this.tasks = [...this.tasks,this.inlineEditRow];
        }
        this.showAddTask = event.detail;
        this.showInlineEdit = event.detail;
    }

    handleSave(event){
        console.log("Test");
        //console.log(this.template.querySelector("c-task-form"));
        
        let task = event.detail;
        console.log("Task:"+JSON.stringify(task));
        // let subjectCmp = this.template.querySelector(".subject");
        // console.log('length'+parseInt(subjectCmp.value.length));
        // if(parseInt(subjectCmp.value.length) < 50){
        //     subjectCmp.setCustomValidity("Please enter atleast 50 characters");
        //     subjectCmp.reportValidity();
        //     inputCmp.checkValidity();
        // }
        
        // const allValid = [
        //     ...this.template.querySelectorAll('lightning-input'),
        // ].reduce((validSoFar, inputCmp) => {
        //     inputCmp.setCustomValidity("Please enter valid inputs");
        //     inputCmp.reportValidity();
        //     return validSoFar && inputCmp.checkValidity();
        // }, true);
        // console.log('Valid:'+allValid);
        // if (allValid) {
            //alert('All form entries look valid. Ready to submit!');
            // task.Subject = this.template.querySelector(".subject").value;
            // task.Description = this.template.querySelector(".desc").value;
            // task.DueDate = this.template.querySelector(".duedate").value;
            // task.Contact = this.template.querySelector(".contact").value;
            // task.Phone = this.template.querySelector(".phone").value;
            // task.Email = this.template.querySelector(".email").value;
            this.tasks = [...this.tasks,task];
            this.showAddTask = false;
            this.showInlineEdit = false;
        // } else {
        //     alert('Please update the invalid form entries and try again.');
        // }
        
    }

    handlRowAction(event){
        let action = event.detail.action.name;

        let row = event.detail.row;
        console.log("Row:"+JSON.stringify(row));
        console.log(row.Email);
        if(action==='delete'){
            this.tasks = this.tasks.filter((task)=>task.Email!==row.Email);
        }
        if(action==='edit'){
            this.inlineEditRow = row;
            this.showInlineEdit = true;
            this.tasks = this.tasks.filter((task)=>task.Email!==row.Email);
        }
    }

    handleEdit(event){
    }

    handleSelection(event){
        this.selectedRows = event.detail.selectedRows;
        console.log(JSON.stringify(this.selectedRows));

    }

    handleDeleteTasks(event){
        this.tasks = this.tasks.filter(task=>{
            return !this.selectedRows.some(row=>{
                return row.Email===task.Email;
          });
        });
    }
       
}
