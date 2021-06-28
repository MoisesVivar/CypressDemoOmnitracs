/// <reference types="Cypress" />
class tableSortAndSearch{
    static selectingNumberOfEntries(numberOfEntries){
        cy.get("select").select(numberOfEntries)
    }
    static verifiyingNumberOfButtons(numberOfButtons){
        cy.get("span a[class*='paginate_button ']").as("pageButtons")
        cy.get("@pageButtons").should("have.length", numberOfButtons)
        for (let index = 0; index < parseInt(numberOfButtons) ; index++) {
            let value = index + 1
            cy.get("@pageButtons").eq(index).should("have.text",value.toString())
        }
    }
    static clickingPageButton(pageNumber){
        let buttonIndex = parseInt(pageNumber) - 1
        cy.get("span a[class*='paginate_button ']").eq(buttonIndex).click()
    }
    static verifiyingMessageForEntries(message){
        cy.get(".dataTables_info").should("have.text",message)
    }
    static verifiyingNumberOfEntriesPerPage(numberOfEntries){
        cy.get("tbody tr").should("have.length", numberOfEntries)
    }
}

export {tableSortAndSearch}