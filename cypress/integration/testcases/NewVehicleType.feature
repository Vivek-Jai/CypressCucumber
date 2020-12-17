Feature: New Vehicle Type creation


    Background: Login to the application
    Given Navigate to the application by using the URL
         When The user enter the username and password
        |username|password|
        |shane.mann@tranzaura.com|Munster1|
         And Click the signin button
         And Verify the username is displayed in the dashboard
        |username|
        |shane.mann@tranzaura.com|

        Scenario: New Vehicle Type creation

        Given Click the vehicle type submenu in administration menu
        Then Click the add button and fill the form details
          |Companyname|VehicleType|Redtext|Orangetext|
          |AdientDsrcTest2|Truck3|5|10|
          |AdientDsrcTest2|Car3|5|10|
          


        And Verify the created vehicle type is displayed in the vehicle type dropdown

        |Companyname|VehicleType|
        |AdientDsrcTest2|Truck3|
        |AdientDsrcTest2|Car3|
        