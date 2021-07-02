Feature: Table Sort & Search
    
    This is a complex table about the data of the employees from a particular company. 
    You can decide how many entries you want to visualize per page, sort the data by a field at a time, 
    and search data from the table.

    Background:
    Given Data is imported
    And I visit the main page
    And I select the advanced option
    And I clear the cookies
    
    Scenario Outline: Showing N entries per page
    Given I open the "Table Sort & Search" option
    When I select show "<max_number_entries>" maximum entries per page
    Then I should see "<number_buttons>" page buttons
    
    Examples:
        | max_number_entries | number_buttons |
        | 10                 | 4              |
        | 25                 | 2              |
        | 50                 | 1              |
        | 100                | 1              |
    
    Scenario Outline: Verifiying the amount of entries per page
    Given I open the "Table Sort & Search" option
    When I select show "<max_number_entries>" maximum entries per page
    And I click on the number "<page>" page button
    Then I should see the message "<message>"
    And There should be "<number_entries>" number of entries

    Examples: 
        | max_number_entries | page | number_entries | message			               |
        | 10                 |  1   | 10             | Showing 1 to 10 of 32 entries   |
        | 10                 |  2   | 10             | Showing 11 to 20 of 32 entries  |
        | 10                 |  3   | 10             | Showing 21 to 30 of 32 entries  |
        | 10                 |  4   | 2              | Showing 31 to 32 of 32 entries  |
        | 25                 |  1   | 25             | Showing 1 to 25 of 32 entries   |
        | 25                 |  2   | 7              | Showing 26 to 32 of 32 entries  |
        | 50                 |  1   | 32             | Showing 1 to 32 of 32 entries   |
        | 100                |  1   | 32             | Showing 1 to 32 of 32 entries   |

    @focus
    Scenario Outline: Verifying the data is sorted
    Given I open the "Table Sort & Search" option
    When I select show "<max_number_entries>" maximum entries per page
    And I sort by "<column>" in "<order>" order
    Then Data should be sorted by "<column>" in "<order>" order and with "<max_number_entries>" maximum entries per page

    Examples: 
        |max_number_entries	|column			|order  |
        |10					|Name           |asc    |
        |10					|Name 	        |desc   |
        |10					|Position       |asc    |
        |10					|Position       |desc   |
        |10					|Office	        |asc    |
        |10					|Office         |desc   |
        |10                 |Age            |asc    |
        |10                 |Age            |desc   |
        |10                 |Start date     |asc    |
        |10                 |Start date     |desc   |
        |10                 |Salary         |asc    |
        |10                 |Salary         |desc   |
        |25					|Name           |asc    |
        |25					|Name 	        |desc   |
        |25					|Position       |asc    |
        |25					|Position       |desc   |
        |25					|Office	        |asc    |
        |25					|Office         |desc   |
        |25                 |Age            |asc    |
        |25                 |Age            |desc   |
        |25                 |Start date     |asc    |
        |25                 |Start date     |desc   |
        |25                 |Salary         |asc    |
        |25                 |Salary         |desc   |
        |50					|Name           |asc    |
        |50					|Name 	        |desc   |
        |50					|Position       |asc    |
        |50					|Position       |desc   |
        |50					|Office	        |asc    |
        |50					|Office         |desc   |
        |50                 |Age            |asc    |
        |50                 |Age            |desc   |
        |50                 |Start date     |asc    |
        |50                 |Start date     |desc   |
        |50                 |Salary         |asc    |
        |50                 |Salary         |desc   |
        |100				|Name           |asc    |
        |100				|Name 	        |desc   |
        |100				|Position       |asc    |
        |100				|Position       |desc   |
        |100				|Office	        |asc    |
        |100				|Office         |desc   |
        |100                |Age            |asc    |
        |100                |Age            |desc   |
        |100                |Start date     |asc    |
        |100                |Start date     |desc   |
        |100                |Salary         |asc    |
        |100                |Salary         |desc   |



