import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pageObjects/homePage"
import {tableSortAndSearch} from "../../pageObjects/advancedPage"


Given("Data is imported", function(){
    cy.fixture("example").then((data)=> {
        this.data = data
    })
})

And("I visit the main page", function(){
    cy.visit(Cypress.env("url"))
    cy.url().should('eq', Cypress.env("url"))
    homePage.OmitSeleniumAnnouncement()
})

And("I select the advanced option", function(){
    homePage.SelectComplexity("advanced")
})

And("I clear the cookies", function(){
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

And("I sort by {string} in {string} order", (column, order) => {
    tableSortAndSearch.sorting_By(column, order)
})

Then("Data should be sorted by {string} in {string} order and with {string} maximum entries per page", function(column, order, maximum_entries) {
    tableSortAndSearch.verifyingDataIsSorted(column, order, maximum_entries, this.data.TableSortAndSearch.tableSortedbyNameAsc)
})

