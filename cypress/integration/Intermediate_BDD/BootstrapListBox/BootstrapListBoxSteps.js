import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pageObjects/homePage"
import {BootstrapListBox} from "../../pageObjects/intermediatePage"

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

When("I type {string} into the {string} search box", (data, side) => {
    BootstrapListBox.typingDataOnSide(data, side)
})

When("I select the {string} option from the {string} list", (data, side)  => {
    BootstrapListBox.selectingOption(data, side)
})

And("I click on the {string} button",(side) => {
    BootstrapListBox.clickButtonToSide(side)
})

Then("I should find the {string} option in the {string} list", (data, side) =>{
    BootstrapListBox.findingElementOnList(data, side)
})

When("I click on the {string} select all button", (side) => {
    BootstrapListBox.selectSelectingAllButton(side)
})

Then("All 5 {string} options should be selected", (side) => {
    BootstrapListBox.verifiyingAllSelections(side)
})

Then("I should see all data on the {string} list", (destination) => {
    BootstrapListBox.verifyingAllData(destination)
})