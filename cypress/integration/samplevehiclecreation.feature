Feature: New Vehicle Type creation


    Background: Login to the application
        Given Navigate to the application by using the URL
         When The user enter the username and password
         

        Scenario: New Vehicle Type creation

        Given Click the vehicle type submenu in administration menu
        Then Click the add button and fill the form details
        And Verify the created vehicle type is displayed in the vehicle type dropdown