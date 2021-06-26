import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pageObjects/homePage"
import {InputFormWithValidations} from "../../pageObjects/intermediatePage"

beforeEach(() => {
    cy.visit(Cypress.env("url"))
    cy.url().should('eq', Cypress.env("url"))
    homePage.OmitSeleniumAnnouncement()
    homePage.SelectComplexity("intermediate")
    cy.clearCookies({ log: true})
})

Given("I open the {string} option", (option) => {
    homePage.SelectIntermediateOption(option)
})

When("The {string} is empty", (field) => {
    InputFormWithValidations.verifyFieldIsEmpty(field)
})

And("I click on the send button", () => {  
    InputFormWithValidations.submitingTheForm()
})

Then("I should see {string} into the {string}", (message, field) => {
    InputFormWithValidations.verifyingHelpMessages(message,field)
})

When("I type {string} into the {string} field",(validData, field) =>{
    InputFormWithValidations.typingDataIntoAField(validData,field)
})

Then("I should see the {string} field in green", (field) => {
    InputFormWithValidations.verifyingGreenStatusOfAField(field)
})

When("I select {string} from the State field", (validState) => {
    InputFormWithValidations.selectingDataFromMenu(validState)
})

Then("I should see the State field in green", () => {
    InputFormWithValidations.verifiyingGreenStatusMenu()
})

Then("I should see the message {string} into the {string}",(helpMessage, field) => {
    InputFormWithValidations.verifiyingMessage(helpMessage, field)
})