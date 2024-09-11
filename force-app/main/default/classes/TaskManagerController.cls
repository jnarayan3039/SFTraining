public with sharing class TaskManagerController {
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks(String accountId){
        System.debug('Record Id:'+accountId);
        List<Task> tasks = [SELECT Id, Subject, Status, Priority, ActivityDate, 
        CreatedById, CreatedDate, OwnerId, WhatId, WhoId 
        FROM Task
        WHERE WhatId=:accountId];
        System.debug('NUm Records:'+tasks.size());
        return tasks;
    }
}