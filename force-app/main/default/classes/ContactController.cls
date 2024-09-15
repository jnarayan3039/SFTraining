public with sharing class ContactController {
    public ContactController() {

    }

    @AuraEnabled (cacheable=true)
    public static List<Contact> getContacts(String searchText){
        string name = '%'+searchText+'%';
        return [SELECT Id, Name, FirstName, LastName, Title, Phone, Email FROM Contact WHERE name like :name];
    }
}