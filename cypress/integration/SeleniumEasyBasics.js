/// <reference types="Cypress" />
import homePage from "./pageObjects/homePage"
import {simpleForm, checkBox} from "./pageObjects/basicPages"

describe("Basics", function(){
    
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    beforeEach(function(){
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
    
    it("Test Check Box Demo",function(){
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

    


})