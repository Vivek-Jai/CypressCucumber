Feature: New Depot Creation


    Background: Login to the application
        Given Navigate to the application by using the URL
        When The user enter the username and password
            | username                 | password |
            | shane.mann@tranzaura.com | Munster1 |
        And Click the signin button
        And Verify the username is displayed in the dashboard
            | username                 |
            | shane.mann@tranzaura.com |

    Scenario: Creating the new depot for the vehicle
        Given Click the depot menu in the megamenu
        Then Click the new button
        And  Fill the depot form details and click save
            | Company_Name    | Depot_Name | Address              | Zipcode | WTD | DriverFlagMissed | DriverFlagDue | VehicleFlagMissed | VehicleFlagDue | Due_Soon | MessageToDriver                                                |
            | AdientDsrcTest2 | DsrcDepot6 | 7000 central parkway | 30328   | 26  | 9                | 10            | 11                | 12             | 13       | Hi,The inspection date is coming soon.Have a safe journey!!!!! |

        Then Verify the created depotname is displayed in the depot search dropdown
          |Depot_Name|
          |DsrcDepot5|