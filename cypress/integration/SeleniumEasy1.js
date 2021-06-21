/// <reference types="Cypress" />

describe("Basics", function(){
    
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    beforeEach(function(){
        cy.visit("https://www.seleniumeasy.com/test/")
        cy.url().should('eq', "https://www.seleniumeasy.com/test/")
        cy.get(".at-cm-no-button").click()
        cy.get("#basic_example").click()
        cy.clearCookies({ log: true})
    })
    
    it("Tests simple form demo ", function(){
        cy.get(".list-group > [href='./basic-first-form-demo.html']").click()
        //Verifiying the message
        this.data.SimpleFormDemo.forEach(function(set){
            cy.get("#user-message").type(set.message)
            cy.get("#get-input > .btn").click()
            cy.get("#display").should("have.text",set.message)
            cy.get("#user-message").clear()
        })
        //Verifiying the sum
        this.data.SimpleFormDemo.forEach(function(set){
            cy.get("#sum1").type(set.a)
            cy.get("#sum2").type(set.b)
            cy.get("#gettotal > .btn").click()
            cy.get("#displayvalue").should("have.text",set.c)
            cy.get("#sum1").clear()
            cy.get("#sum2").clear()         
        })
    })
    
    it("Test Check Box Demo",function(){
        cy.get(".list-group > [href='./basic-checkbox-demo.html']").click()
        //Checking the message
        cy.get("#isAgeSelected").should("not.be.checked")
        cy.get("#isAgeSelected").check().should("be.checked")
        cy.get("#txtAge").should("have.text","Success - Check box is checked")
        cy.get("#isAgeSelected").uncheck()
        //Testing checkboxes 1,2,3,4
        cy.get(".cb1-element").each((checkBox) => {
            cy.wrap(checkBox).check()
        })
        cy.get("#check1").should("have.value","Uncheck All").click()
        cy.get(".cb1-element").each((checkBox) => {
            cy.wrap(checkBox).should("not.be.checked")
        })
        cy.get("#check1").should("have.value","Check All")
    })


})