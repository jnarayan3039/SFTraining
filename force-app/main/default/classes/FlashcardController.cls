public with sharing class FlashcardController {
    public FlashcardController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Flashcard_Button_Configuration__mdt> getFlashcardButtonConfigurations() {
        return [SELECT SlotName__c, LwcName__c, IconName__c FROM Flashcard_Button_Configuration__mdt];
    }
}