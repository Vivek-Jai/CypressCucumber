Feature: Test the Transaura Login functionality

    Feature Description: Test the login functionality

    Scenario: Test the Login Functionality of the Transaura application

        Given Navigate to the application by using the URL
        When The user enter the username and password
            | username                 | password |
            | shane.mann@tranzaura.com | Munster1 |
        And Click the signin button
        And Verify the username is displayed in the dashboard
            | username                 |
            | shane.mann@tranzaura.co |
        When the user click the Logout button
        Then Verify the application is successfully Signoff



