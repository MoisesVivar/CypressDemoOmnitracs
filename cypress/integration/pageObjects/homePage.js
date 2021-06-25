export default class homePage{
    static SelectComplexity(complexity){
        cy.get("a[href='#" + complexity + "']").click()
    }
    static SelectIntermediateOption(option){
        cy.clicking_element_by_name("#intermediate div[class='list-group'] a", option)
    }
    static SelectBasicOption(option){
        cy.clicking_element_by_name("#basic div[class='list-group'] a", option)
    }
    static OmitSeleniumAnnouncement(){
        cy.get(".at-cm-no-button").click()
    }
}
