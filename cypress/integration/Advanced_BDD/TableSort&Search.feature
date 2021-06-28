Feature: Table Sort & Search
    
    This is a complex table about the data of the employees from a particular company. 
    You can decide how many entries you want to visualize per page, sort the data by a field at a time, 
    and search data from the table.
    
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
    @focus
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





