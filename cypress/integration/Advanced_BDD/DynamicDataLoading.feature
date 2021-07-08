Feature: Loading data Dynamically from an API
    
    This is a page were random users are retrieve from the response of an API. The objective is 
    to mock the respose of this API to send desire data.

    Background:
    Given Data is imported
    And I visit the main page
    And I select the advanced option
    And I clear the cookies

    Scenario: Verifying Moisés corresponds to male and Briand to Female
    Given I open the "Dynamic Data Loading" option
    When I mock the response of the API
    And I click to the Get New User button
    Then I should see Brianda for female pictures or Moisés for male pictures