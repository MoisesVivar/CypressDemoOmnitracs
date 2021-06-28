import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pageObjects/homePage"
import {JQueryListBox} from "../../pageObjects/intermediatePage"

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

When("I select the following names {string} from the {string} list", (names, list) => {
    JQueryListBox.selectingSeveralNames(names, list)
})

And("The second list is empty", () => {
    JQueryListBox.verifyingSecondListIsEmpty()
})

And("I click on the {string} button", (name) => {
    JQueryListBox.clicking(name)
})

Then("I should see the {string} in the second list", (names) => {
    JQueryListBox.verifyingDataOnSecondList(names)
})

When("I click on the {string} button", (name) => {
    JQueryListBox.clicking(name)
})

Then("I should see the first list empty and the second with all the data", () => {
    JQueryListBox.verifiyingAddingAll()
})

Then("I should see back the {string} at the bottom of the first and the second list empty", (names) => {
    JQueryListBox.removingSeveralNames(names)
})

Then("I should see the second list empty", () => {
    JQueryListBox.verifyingSecondListIsEmpty()
})