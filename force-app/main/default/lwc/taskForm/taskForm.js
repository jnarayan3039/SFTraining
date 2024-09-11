import { LightningElement,api} from 'lwc';

export default class TaskForm extends LightningElement {
    @api task = 
        {
            Subject:'',
            Status:'',
            Priority:'',
            WhatId:'',
            WhoId:'',
        };
    

    @api getTask(){
        this.task.Subject = this.template.querySelector(".subject").value;
        this.task.Status = this.template.querySelector(".status").value;
        this.task.Priority = this.template.querySelector(".priority").value;
        this.task.WhatId = this.template.querySelector(".whatid").value;
        this.task.WhoId = this.template.querySelector(".whoid").value;
        return this.task;
    }  
    
    handleCancel(){
        let showModal=false;
        const cancelEvent = new CustomEvent('cancel', {detail:showModal});
        this.dispatchEvent(cancelEvent);
    }
    handleSave(event){
        let uTask={};
        try{
        console.log(JSON.stringify(uTask));
        uTask.Subject = this.template.querySelector(".subject").value;
        uTask.Status = this.template.querySelector(".status").value;
        uTask.Priority = this.template.querySelector(".priority").value;
        uTask.WhatId = this.template.querySelector(".whatid").value;
        uTask.WhoId = this.template.querySelector(".whoid").value;
        console.log(JSON.stringify(uTask));
        const saveEvent = new CustomEvent('save',{detail:uTask});
        console.log(JSON.stringify(saveEvent));
        this.dispatchEvent(saveEvent);
        }catch(e){
            console.log(e);
        }
    }
}