Feature: Bootstrap List Box

    This is a dual list example where you can pass data between list boxes. Yo can do it by
    selecting data or by searching them with the search box, and clicking the button pointing
    to an specific list box.
    
    Scenario Outline: Passing data from left to right 
    Given I open the "Bootstrap List Box" option
    When I select the "<data>" option from the "left" list
    And I click on the "right" button
    Then I should find the "<data>" option in the "right" list

    Examples:
        |data                   |
        |bootstrap-duallist     |
        |Dapibus ac facilisis in|
        |Morbi leo risus        |
        |Porta ac consectetur ac|
        |Vestibulum at eros     |

    Scenario Outline: Passing data from right to left 
    Given I open the "Bootstrap List Box" option
    When I select the "<data>" option from the "right" list
    And I click on the "left" button
    Then I should find the "<data>" option in the "left" list

    Examples:
        |data                   |
        |Cras justo odio        |
        |Dapibus ac facilisis in|
        |Morbi leo risus        |
        |Porta ac consectetur ac|
        |Vestibulum at eros     |

    Scenario Outline: Verifying the "select all button" functionality
    Given I open the "Bootstrap List Box" option
    When I click on the "<side>" select all button
    Then All 5 "<side>" options should be selected
    
    Examples:
        |side  |
        |left  |
        |right |
    
    Scenario Outline: Verifying moving all data from side to side
    Given I open the "Bootstrap List Box" option
    When I click on the "<origin>" select all button
    And I click on the "<destination>" button
    Then I should see all data on the "<destination>" list

    Examples: 
        |origin | destination |
        |left   | right       |
        |right  | left        |
    


