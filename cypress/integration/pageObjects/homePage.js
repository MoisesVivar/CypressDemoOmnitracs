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
}
