/// <reference types="Cypress" />
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

class BootstrapListBox{
    static typingDataOnSide(data, side){
        let searchLocator = "div[class='dual-list list-"+side+" col-md-5'] div div div input"
        cy.get(searchLocator).type(data)
    }
    static selectingOption(data, side){
        let itemLocator =  "div[class='dual-list list-"+side+" col-md-5'] div ul"
        cy.get(itemLocator).contains(data).click()
    }
    static clickButtonToSide(side){
        let buttonLocator = "button[class='btn btn-default btn-sm move-" + side + "']"
        cy.get(buttonLocator).click()
    }
    static findingElementOnList(data, side){
        let itemLocator =  "div[class='dual-list list-"+side+" col-md-5'] div ul li"
        cy.get(itemLocator).then((itemsList) => {
            cy.get(itemLocator).eq(itemsList.length-1).should("have.text", data)
        })
    }
    static selectSelectingAllButton(side){
        let buttonLocator = "div[class='dual-list list-" + side + " col-md-5'] div div div div[class='btn-group']"
        cy.get(buttonLocator).click()
    }
    static verifiyingAllSelections(side){
        let itemLocator =  "div[class='dual-list list-"+side+" col-md-5'] div ul li"
        cy.get(itemLocator).each((item) => {
            cy.wrap(item).should("have.attr", "class", "list-group-item active")
        })
    }
    static verifyingAllData(side){
        let itemLocator =  "div[class='dual-list list-"+side+" col-md-5'] div ul li"
        cy.get(itemLocator).should("have.length",10)
    }
}

class JQueryListBox{
    static selectingSeveralNames(names, list){
        if (list === "first") {
            cy.get("select[class='form-control pickListSelect pickData']").select(names.split(","))
        } else {
            cy.get("select[class='form-control pickListSelect pickListResult']").select(names.split(","))
        }
        
    }
    static verifyingSecondListIsEmpty(){
        cy.get("select[class='form-control pickListSelect pickListResult']").should("be.empty")
    }
    static verifyingDataOnSecondList(names){
        let namesA = names.split(",")
        namesA.forEach(name => {
            cy.get("select[class='form-control pickListSelect pickListResult'] option").should("include.text",name)
        })
    }
    static verifiyingAddingAll(){
        cy.get("select[class='form-control pickListSelect pickListResult'] option").should("have.length",15)
        cy.get("select[class='form-control pickListSelect pickData']").should("be.empty")
    }
    static clicking(name){
        cy.contains(name).click()
    }
    static removingSeveralNames(names){
        let namesA = names.split(",")
        cy.get("select[class='form-control pickListSelect pickData'] option").then( (list) => {
        let begin = list.length-namesA.length
        let final = list.length
        let lastElements = list.slice(begin,final)
            namesA.forEach((name) => {
                cy.wrap(lastElements).should("include.text",name)
            })
        })
        cy.get("select[class='form-control pickListSelect pickListResult']").should("be.empty")
    }
}

export {InputFormWithValidations, BootstrapListBox,JQueryListBox}