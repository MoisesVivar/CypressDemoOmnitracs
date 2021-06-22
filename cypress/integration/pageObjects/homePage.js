export default class homePage{
    static BasicsButton(){
        return cy.get("#basic_example")
    }
    static NoThanksButton(){
        return cy.get(".at-cm-no-button")
    }
    static SimpleFormButton(){
        return cy.get(".list-group > [href='./basic-first-form-demo.html']")
    }
    static CheckBoxButton(){
        return cy.get(".list-group > [href='./basic-checkbox-demo.html']")
    }
    static RadioButtonsButton(){
        return cy.get(".list-group > [href='./basic-radiobutton-demo.html']")
    }
    static DropdownListButton(){
        return cy.get("list-group > [href='./basic-select-dropdown-demo.html']")
    }
    static JavascriptAlertsButton(){
        return cy.get("list-group > [href='./javascript-alert-box-demo.html']")
    }
    static WindowPopupButton(){
        return cy.get("list-group > [href='./window-popup-modal-demo.html']")
    }
    static BootstrapAlertsButton(){
        return cy.get("list-group > [href='./bootstrap-alert-messages-demo.html']")
    }
    static BootstrapModalsButton(){
        return cy.get("list-group > [href='./bootstrap-modal-demo.html']")
    }
}
