Feature: Tivix Car Rent
    Simple scenario to check capabilities of Cypress and my ability.
    Whole thing was written with no(minimum) prior experience with JavaScript and Cypress with lots of experience with Cucumber.

    Scenario Outline: Submit <country>/<city> form using valid dates.
    When user select "<country>" in "country" dropdown
    And user select "<city>" in "city" dropdown
    And user type "<model>" model
    And user enter "2021-04-09" "pickup" date | format is YYYY-MM-DD
    And user enter "2021-04-19" "dropoff" date | format is YYYY-MM-DD
    And user click Search button
    Then "country" dropdown value is "<country>"
    And "city" dropdown value is "<city>"
    And model value is "<model>"
    And "pickup" date value is "2021-04-09"
    And "dropoff" date value is "2021-04-19"
    And search results are displayed

    Examples:
    | country | city    | model |
    | Poland  | Cracow  | Civic |
    | Poland  | Wroclaw | Civic |
    | Germany | Berlin  | Civic |
    | France  | Paris   | Civic |

    Scenario Outline: Submit <country>/<city> form using invalid dates.
    When user select "<country>" in "country" dropdown
    And user select "<city>" in "city" dropdown
    And user type "<model>" model
    And user enter "2021-04-19" "pickup" date | format is YYYY-MM-DD
    And user enter "2021-04-09" "dropoff" date | format is YYYY-MM-DD
    And user click Search button
    Then "country" dropdown value is "<country>"
    And "city" dropdown value is "<city>"
    And model value is "<model>"
    And "pickup" date value is "2021-04-19"
    And "dropoff" date value is "2021-04-09"
    And Please enter a valid date! error is displayed

    Examples:
    | country | city    | model |
    | Poland  | Cracow  | Civic |
    | Poland  | Wroclaw | Civic |
    | Germany | Berlin  | Civic |
    | France  | Paris   | Civic |

    Scenario: Happy path to rent a car
    When user select "Poland" in "country" dropdown
    And user select "Cracow" in "city" dropdown
    And user type "Fiat 126p" model
    And user enter "2021-04-09" "pickup" date | format is YYYY-MM-DD
    And user enter "2021-04-19" "dropoff" date | format is YYYY-MM-DD
    And user click "Search" button
    Then "country" dropdown value is "Poland"
    And "city" dropdown value is "Cracow"
    And model value is "Fiat 126p"
    And "pickup" date value is "2021-04-09"
    And "dropoff" date value is "2021-04-19"
    # Lack of validations from this point is due to lack of time, I am sincerely sorry.
    When user click first Rent car button on list 
    And user click "Rent!" button
    And user type "Krzysztof" in "name" field | Summary site
    And user type "Wnuk" in "last_name" field | Summary site
    And user type "1234567890" in "card_number" field | Summary site
    And user type "pozdrawiam@wroclaw.pl" in "email" field | Summary site
    And user click "Rent" button
