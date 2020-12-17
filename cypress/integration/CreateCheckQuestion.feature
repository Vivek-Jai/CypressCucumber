Feature: Create new check question for the vehicle type


    Scenario: Login to the application
        Given Navigate to the application by using the URL
        When The user enter the username and password
            | username                 | password |
            | shane.mann@tranzaura.com | Munster1 |
        And Click the signin button
        And Verify the username is displayed in the dashboard
            | username                 |
            | shane.mann@tranzaura.com |

    Scenario: Create Pre-departure check question for the vehicle type

        Given click the check managment submenu
        When Select the company,vehicle type and then fill the pre-depature question and verify the toast message
            | Companyname     | Vehicle_Type | Checkname                   | Checkinfo       | Req_answer | Priority |
            | AdientDsrcTest2 | Car          | Check the car gears working1 | Testing purpose | No         | VOR      |

        Then click the check back button

    Scenario: Create onRoad check question for the vehicle type

        Given Fill the onroad check question and verify the toast message
            | Companyname     | Vehicle_Type | Checkname                   | Checkinfo       | Req_answer | Priority |
            | AdientDsrcTest2 | Car          | Check the car seat1 | Testing purpose | Yes        | ASAP     |

    Then click the check back button    

    Scenario: Create Final check question for the vehicle type


        Given Fill the final check question and verify the toast message
            | Companyname     | Vehicle_Type | Checkname                    | Checkinfo       | Req_answer | Priority          |
            | AdientDsrcTest2 | Car          | Check the car lights1 | Testing purpose | No         | Next Maintainance |

