import { LightningElement,track } from 'lwc';

export default class TaskManager extends LightningElement {
    showAddTask = false;
    @track tasks = [
        {
            Subject: "Call back customer",
            Description: "Had a call with customer and customer has asked to call back after few hours",
            DueDate: "Today",
            Contact: "James Callahan",
            Phone: "41527912310",
            Email: "abc@xyz.com"
        },
        {
            Subject: "Send Email with update on enquiry",
            Description: "Customer requested for an update about the discount on product that we discussed",
            DueDate: "Today",
            Contact: "John Harp",
            Phone: "12313215125",
            Email: "xyz@abc.com"
        }

    ];

    handleAddTask(event){
        this.showAddTask = true;
    }

    handleCancel(event){
        this.showAddTask = false;
    }

    handleSave(event){
        let task = {};
        task.Subject = this.template.querySelector(".subject").value;
        task.Description = this.template.querySelector(".desc").value;
        task.DueDate = this.template.querySelector(".duedate").value;
        task.Contact = this.template.querySelector(".contact").value;
        task.Phone = this.template.querySelector(".phone").value;
        task.Email = this.template.querySelector(".email").value;
        this.tasks.push(task);
        this.showAddTask = false;
        }
       
}
