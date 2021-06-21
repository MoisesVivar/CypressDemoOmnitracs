/// <reference types="Cypress" />

describe("Basics", function(){
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
        cy.clearCookies({ log: true})
        cy.visit("https://www.seleniumeasy.com/test/")
        cy.url().should('eq', "https://www.seleniumeasy.com/test/")
        cy.get(".at-cm-no-button").click()
        cy.get("#basic_example").click()
    })
    
    it("Test simple form demo ", function(){
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
    


})