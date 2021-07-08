import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../../pageObjects/homePage"
import {DynamicDataLoading} from "../../pageObjects/advancedPage"

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

When("I mock the response of the API", () => {
    DynamicDataLoading.mockingAPI()
})

And("I click to the Get New User button", () => {
    DynamicDataLoading.gettingNewUser()
})

Then("I should see Brianda for female pictures or Moisés for male pictures", () => {
    DynamicDataLoading.verifyingNames()
})