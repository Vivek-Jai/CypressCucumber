Feature: Create new vehicle for the vehicle type

    Background: Login to the application
        Given Navigate to the application by using the URL
        When The user enter the username and password
            | username                 | password |
            | shane.mann@tranzaura.com | Munster1 |
        And Click the signin button
        And Verify the username is displayed in the dashboard
            | username                 |
            | shane.mann@tranzaura.com |

    Scenario: Create new Vehicle for the vehicle type

        Given Click the vehicle submenu in administration menu

        Then Fill the required form fields and click save

            | Companyname     | VehicleRegno | Depot      | FleetID | Vehicletype | Costcenter | Ownership       | Manufacter | Height | Weight | Unladenweight | Axle |
            | AdientDsrcTest2 | DSRC100      | DsrcDepot1 | 1000    | Car         | cost1      | Company Vehicle | Volvo      | 10     | 50     | 60            | 70   |
            | AdientDsrcTest2 | DSRC101      | DsrcDepot1 | 1001    | Car         | cost1      | Company Vehicle | Volvo      | 10     | 50     | 60            | 70   |


        And Verify the created vehicle registartion id is displayed in the registration dropdown

            | Companyname     | VehicleRegno | FleetID |
            | AdientDsrcTest2 | DSRC100      | 1000    |
            | AdientDsrcTest2 | DSRC101      | 1001    |