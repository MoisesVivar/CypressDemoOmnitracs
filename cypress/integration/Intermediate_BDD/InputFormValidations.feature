Feature: Input Form with Validations

    Basic input form with validations such as size of a field and email validation.
    The incorrect use of the form yields a message in each field.

    @EmptyFields
    Scenario Outline: All fields empty
    Given I open the "Input Form with Validations" option
    When The "<field>" is empty
    And I click on the send button 
    Then I should see "<helpMessage>" into the "<field>"

    Examples:
        |field               |helpMessage                                |
        |first_name          |Please supply your first name              |
        |last_name           |Please supply your last name               |
        |email               |Please supply your email address           |
        |phone               |Please supply your phone number            |
        |address             |Please supply your street address          |
        |city                |Please supply your city                    |
        |zip                 |Please supply your zip code                |
        |project_description |Please supply a description of your project|
        |state               |Please select your state                   |

    @GoodDataTextInputs 
    Scenario Outline: Good data introduced by field (text inputs)
    Given I open the "Input Form with Validations" option
    When I type "<Data>" into the "<field>" field
    Then I should see the "<field>" field in green

    Examples:
        |field               |Data                    |
        |first_name          |Moisés                  |
        |last_name           |Vivar                   |
        |email               |moisesvivar96@gmail.com |
        |phone               |5583672629              |
        |address             |5 de Mayo #75           |
        |city                |Mexico City             |
        |zip                 |54055                   |
        |project_description |Datos Moises            |

    @BadDataTextInputs 
    Scenario Outline: Bad data introduced by field (text inputs)
    Given I open the "Input Form with Validations" option
    When I type "<Data>" into the "<field>" field
    Then I should see the message "<helpMessage>" into the "<field>"

    Examples:
        |field               |Data|helpMessage                                             |
        |first_name          |M   |Please enter more than 2 characters                     |
        |last_name           |V   |Please enter more than 2 characters                     |
        |email               |m   |Please supply a valid email address                     |
        |phone               |5   |Please supply a vaild phone number with area code       |
        |address             |5   |Please enter more than 8 characters                     |
        |city                |M   |Please enter more than 4 characters                     |
        |zip                 |5   |Please supply a vaild zip code                          |
        |project_description |D   |Please enter at least 10 characters and no more than 200|

    @GoodDataSelectMenu @focus
    Scenario Outline: Good data introduced (select menu)
    Given I open the "Input Form with Validations" option
    When I select "<validState>" from the State field
    Then I should see the State field in green
    
    Examples:
        |validState          |
        |Alabama             |
        |Alaska              |
        |Arizona             |
        |Arkansas            |
        |California          |
        |Colorado            |
        |Connecticut         |







    