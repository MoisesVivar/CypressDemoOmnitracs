import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pageObjects/homePage"
import {tableSortAndSearch} from "../../pageObjects/advancedPage"

beforeEach(() => {
    cy.visit(Cypress.env("url"))
    cy.url().should('eq', Cypress.env("url"))
    homePage.OmitSeleniumAnnouncement()
    homePage.SelectComplexity("advanced")
    cy.clearCookies({ log: true})
})

Given("I open the {string} option", (option) => {
    homePage.SelectAdvancedOption(option)
})

When("I select show {string} maximum entries per page", (numberOfEntries) => {
    tableSortAndSearch.selectingNumberOfEntries(numberOfEntries)
})

Then("I should see {string} page buttons", (numberOfButtons) => {
    tableSortAndSearch.verifiyingNumberOfButtons(numberOfButtons)
})

And("I click on the number {string} page button", (pageNumber) => {
    tableSortAndSearch.clickingPageButton(pageNumber)
})

Then("I should see the message {string}", (message) => {
    tableSortAndSearch.verifiyingMessageForEntries(message)
})

And("There should be {string} number of entries", (numberOfEntries) => {
    tableSortAndSearch.verifiyingNumberOfEntriesPerPage(numberOfEntries)
})


