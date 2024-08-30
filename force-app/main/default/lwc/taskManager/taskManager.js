import { LightningElement,track } from 'lwc';

export default class TaskManager extends LightningElement {
    showAddTask = false;
    showInlineEdit = false;
    selectedRows = [];
    inlineEditRow;
    @track tasks = [
        {
            Subject: "Call back customer",
            Description: "Had a call with customer and customer has asked to call back after few hours",
            DueDate: "Today",
            Contact: "James Callahan",
            Phone: "41527912310",
            Email: "abc@xyz.com",
        },
        {
            Subject: "Send Email with update on enquiry",
            Description: "Customer requested for an update about the discount on product that we discussed",
            DueDate: "Today",
            Contact: "John Harp",
            Phone: "12313215125",
            Email: "xyz@xyz.com"
        }

    ];
    columns = [
        {label:'Subject',fieldName:'Subject'},
        {label:'Description',fieldName:'Description'},
        {label:'Due Date',fieldName:'DueDate'},
        {label:'Contact',fieldName:'Contact'},
        {label:'Phone',fieldName:'Phone'},
        {label:'Email',fieldName:'Email'},
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
        this.showAddTask = true;
    }

    handleCancel(event){
        this.showAddTask = false;
        this.showInlineEdit = false;
    }

    handleSave(event){
        let task = {};
        task.Subject = this.template.querySelector(".subject").value;
        task.Description = this.template.querySelector(".desc").value;
        task.DueDate = this.template.querySelector(".duedate").value;
        task.Contact = this.template.querySelector(".contact").value;
        task.Phone = this.template.querySelector(".phone").value;
        task.Email = this.template.querySelector(".email").value;
        this.tasks = [...this.tasks,task];
        this.showAddTask = false;
        this.showInlineEdit = false;
    }

    handlRowAction(event){
        let action = event.detail.action.name;
        let row = event.detail.row;
        console.log(row.Email);
        if(action==='delete'){
            console.log("Test");
            this.tasks = this.tasks.filter((task)=>task.Email!==row.Email);
        }
        if(action==='edit'){
            this.inlineEditRow = row;
            console.log("Test");
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
