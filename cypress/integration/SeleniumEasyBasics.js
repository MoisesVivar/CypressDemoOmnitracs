/// <reference types="Cypress" />
import homePage from "./pageObjects/homePage"
import {simpleForm, checkBox, radioButton, javaScriptAlerts, bootstrapAlert, bootstrapModals} from "./pageObjects/basicPages"

describe("Basics", function(){

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
        cy.visit(Cypress.env("url"))
        cy.url().should('eq', Cypress.env("url"))
        homePage.NoThanksButton().click()
        homePage.BasicsButton().click()
        cy.clearCookies({ log: true})
    })
    
    it("Tests simple form demo ", function(){
        homePage.SimpleFormButton().click()
        //Verifiying the message with 3 different sets
        this.data.SimpleFormDemo.forEach(function(set){
            simpleForm.enterMessage().type(set.message)
            simpleForm.showMessageButton().click()
            simpleForm.yourMessage().should("have.text",set.message)
            simpleForm.enterMessage().clear()
        })
        //Verifiying the sum
        this.data.SimpleFormDemo.forEach(function(set){
            simpleForm.enterA().type(set.a)
            simpleForm.enterB().type(set.b)
            simpleForm.getTotal().click()
            simpleForm.total_A_plus_B().should("have.text",set.c)
            simpleForm.enterA().clear()
            simpleForm.enterB().clear()         
        })
    })
    
    it("Tests Check Box Demo",function(){
        homePage.CheckBoxButton().click()
        //Testing single checkBox
        checkBox.singleCheckBox().should("not.be.checked")
        checkBox.singleCheckBox().check().should("be.checked")
        checkBox.message().should("have.text","Success - Check box is checked")
        checkBox.singleCheckBox().uncheck()
        //Testing checkboxes 1,2,3,4
        checkBox.fourCheckBoxes().each((checkBox) => {
            cy.wrap(checkBox).check()
        })
        checkBox.checkUncheckButton().should("have.value","Uncheck All").click()
        checkBox.fourCheckBoxes().each((checkBox) => {
            cy.wrap(checkBox).should("not.be.checked")
        })
        checkBox.checkUncheckButton().should("have.value","Check All")
    })

    it("Tests Radio buttons demo", function(){
        homePage.RadioButtonsButton().click()
        radioButton.firstTwoRadioButtons().each((radio) => {
            const gender = radio.prop("value")
            cy.wrap(radio).check()
            radioButton.getCheckedValueButton().click()
            radioButton.message().should("have.text","Radio button " + "'"+ gender + "'" + " is checked")
        })

        radioButton.sexRadioButtons().each((radio) =>{
            const gender = radio.prop("value")
            cy.wrap(radio).check()
            radioButton.ageGroupRadioButtons().each((ageGroup) => {
                const age =ageGroup.prop("value")
                cy.wrap(ageGroup).check()
                radioButton.getValuesButton().click()
                radioButton.sexAgeGroupMessage().should("have.text","Sex : " + gender +" Age group: "+ age)
            })
        })
    })

    it("Tests the Javascript alerts",function(){
        homePage.JavascriptAlertsButton().click()
        javaScriptAlerts.handlingAlert("I am an alert box!")
        javaScriptAlerts.handlingConfirm("Press a button!")
        javaScriptAlerts.handlingPrompt("Moisés Vivar")
    })

    it ("Tests the Bootstrap Alerts", function(){
        homePage.BootstrapAlertsButton().click()
        bootstrapAlert.verifiyingNormalMessages(this.data.BootstrapAlertMessages)
        bootstrapAlert.verifiyingAutocloseableMessages(this.data.BootstrapAlertMessages)
        
    })

    it("Test Bootstrap Modals", function(){
        homePage.BootstrapModalsButton().click()
        bootstrapModals.verifyingSingleModalExample()
        bootstrapModals.verifyingMultipleModal()
    })

})