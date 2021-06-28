Feature: JQuery List Box

    This is a pick list where you can choose one or more options form a list and add them to the 
    other one using the add button. You can add all the options from the list as well using the 
    Add All button, remove and remove all the data.
    
    Scenario Outline: Adding a set of names to the second list
    Given I open the "JQuery List Box" option
    When I select the following names "<names>" from the "first" list
    And The second list is empty 
    And I click on the "Add" button
    Then I should see the "<names>" in the second list

    Examples:
        |names                              |
        |Isis,Sophia,Laura,Manuela          |
        |Valentina,Beatriz,Sophia,Isis,Laura|
        |Maria Luiza,Isabella,Helena        |

    
    Scenario: Adding all names to the second list
    Given I open the "JQuery List Box" option
    When I click on the "Add All" button
    Then I should see the first list empty and the second with all the data

    
    Scenario Outline: Removing a set of names from the second list
    Given I open the "JQuery List Box" option
    When I select the following names "<names>" from the "first" list
    And I click on the "Add" button
    When I select the following names "<names>" from the "second" list
    And I click on the "Remove" button
    Then I should see back the "<names>" at the bottom of the first and the second list empty

    Examples:
        |names                              |
        |Isis,Sophia,Manuela,Laura          |
        |Valentina,Beatriz,Sophia,Isis,Laura|
        |Maria Luiza,Isabella,Helena        |
    @focus
    Scenario: Removing all names from the second list
    Given I open the "JQuery List Box" option
    When I click on the "Add All" button
    And I click on the "Remove All" button
    Then I should see the second list empty













