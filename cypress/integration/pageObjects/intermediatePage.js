class InputFormWithValidations{
    static verifyFieldIsEmpty(field){
        if (field === "project_description") {
            cy.get("textarea").should("be.empty")
        } else if(field === "state"){
            cy.get("small[data-bv-for='state']").should("have.attr","data-bv-result","NOT_VALIDATED")
        }
        else {
            let field_Locator = "input[name='"+field+"']" 
            cy.get(field_Locator).should("be.empty")
        }       
    }
    static submitingTheForm(){
        cy.contains("Send").as("SendButton")
        cy.get("@SendButton").click()
    }
    static verifyingHelpMessages(message, Field){
        if (Field === "project_description") {
            cy.get("small[data-bv-validator='notEmpty'][data-bv-for='comment']").should("have.text",message)
        } else {
            let field_locator = "small[data-bv-validator='notEmpty'][data-bv-for='" + Field+ "']"
            cy.get(field_locator).should("have.text",message)
        }
    }
    static typingDataIntoAField(validData,field){
        if (field === "project_description") {
            cy.get("textarea").type(validData)
        } else {
            let field_Locator = "input[name='"+field+"']" 
            cy.get(field_Locator).type(validData)
        }
    }
    static verifyingGreenStatusOfAField(field){
        if (field === "project_description") {
            cy.get("div[class='col-md-4 inputGroupContainer'] i[data-bv-icon-for='comment']")
            .should("have.attr","class","form-control-feedback bv-icon-input-group glyphicon glyphicon-ok")
        } else {
            let field_Locator = "div[class='col-md-4 inputGroupContainer'] i[data-bv-icon-for='" + field +"']"
            cy.get(field_Locator).should("have.attr","class","form-control-feedback bv-icon-input-group glyphicon glyphicon-ok")
        }
    }
    static selectingDataFromMenu(validData){
        cy.get("select").select(validData)
    }
    static verifiyingGreenStatusMenu(){
        cy.get("i[data-bv-icon-for='state']").should("have.attr","class","form-control-feedback bv-icon-input-group glyphicon glyphicon-ok")
    }
    static verifiyingMessage(helpMessage, field){
        if (field === "project_description") {
            cy.get("small[data-bv-for='comment'][data-bv-result='INVALID']").should("have.text",helpMessage)    
        } else {
            let field_locator= "small[data-bv-for='" + field +"'][data-bv-result='INVALID']"
            cy.get(field_locator).should("have.text",helpMessage)
        }

    }
}

export {InputFormWithValidations}