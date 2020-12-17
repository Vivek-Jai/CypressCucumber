Feature: Create new user role

    Background: Login to the application
        Given Navigate to the application by using the URL
        When The user enter the username and password
            | username                 | password |
            | shane.mann@tranzaura.com | Munster1 |
        And Click the signin button
        And Verify the username is displayed in the dashboard
            | username                 |
            | shane.mann@tranzaura.com |

    Scenario: Create the new user role in transaura app
        Given Click the user submenu from the administration menu
        And Fill the user details form
            | CompanyName     | FirstName | LastName | UserType | LoginName   | Password | RetypePassword | DL_Number | DL_RenewDate | Language | Address              | Email                | Phone     | Depot      | Type      | Company_SD | PayrollName | Payroll_ID |
            | AdientDsrcTest2 | Driver    | Test     | Driver   | Driver.Test3 | test@123 | test@123       | 123456789 | 12-08-2021   | English  | 7000 central parkway | adientdscr@gmail.com | 789456123 | DsrcDepot1 | Permanent | 12-08-2000 | Dsrc        | 123456789  |
            