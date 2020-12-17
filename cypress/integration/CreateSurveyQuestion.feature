Feature: Create new survey question for the vehicle type


    Scenario: Login to the application
        Given Navigate to the application by using the URL
        When The user enter the username and password
            | username                 | password |
            | shane.mann@tranzaura.com | Munster1 |
        And Click the signin button
        And Verify the username is displayed in the dashboard
            | username                 |
            | shane.mann@tranzaura.com |

    Scenario: Create survey question for the vehicle type

        Given click the check managment submenu
        When Select the company,vehicle type and then fill the survey question and verify the toast message
            | Companyname     | Vehicle_Type | Survey_questiontype | Survey_questionname | Survey_questiontext | Repeat | Week | Day1 | Day2 | Day3 | Day4 | Day5 | End_date   |
            | AdientDsrcTest2 | Car          | Question            | Testing purpose7    | Testing purpose7    | 2      | Week | Mon  | Tue  | Wed  | Thu  | Fri  | 25-12-2021 |
            | AdientDsrcTest2 | Car          | Question            | Testing purpose8    | Testing purpose8    | 2      | Week | Mon  | Tue  | Wed  | Thu  | Fri  | 25-12-2021 |

