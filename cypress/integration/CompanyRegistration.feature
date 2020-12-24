Feature: Company registration

  Feature Description:Resgiter the new Company

  Background: Login to the application
    Given Navigate to the application by using the URL
    When The user enter the username and password
      | username                 | password |
      | shane.mann@tranzaura.com | Munster1 |
    And Click the signin button
    And Verify the username is displayed in the dashboard
      | username                 |
      | shane.mann@tranzaura.com |

  Scenario: Create the new company
    Given Click the company submenu from the administration menu

    Then Fill the General form details
      | Company_Name | Company_Type | Address              | Country | Phone     | Currency  | SalesRep  | StartDate  | LincenseModel | No_of_Login | No_of_DD | No_of_AD | LinceseActivateDate | ExpiryDate | DC             | DC_AnnualRate | DC_Currency | DC_BillingCycle | DC_StartDate | DC_FD      | DC_Contracted | IM                  | IM_AnnualRate | IM_Currency | IM_BillingCycle | IM_StartDate | IM_FD      | IM_Contracted | TA                  | TA_AnnualRate | TA_Currency | TA_BillingCycle | TA_StartDate | TA_FD      | TA_Contracted | VC             | VC_AnnualRate | VC_Currency | VC_BillingCycle | VC_StartDate | VC_FD      | VC_Contracted | WM                  | WM_AnnualRate | WM_Currency | WM_BillingCycle | WM_StartDate | WM_FD      | WM_Contracted |
      | SQL          | Customer     | 7000 central parkway | UK      | 785463214 | US Dollar | Jade Hill | 27-12-2020 | User          | 20          | 20       | 20       | 07-08-2010          | 07-10-2025 | Driver Connect | 50            | US Dollar   | 3               | 12-12-2020   | 12-05-2021 | 100           | Incident Management | 60            | US Dollar   | 3               | 12-12-2021   | 12-05-2022 | 100           | Tachograph Analysis | 70            | US Dollar   | 3               | 12-12-2022   | 12-05-2023 | 100           | Vehicle Checks | 80            | US Dollar   | 3               | 12-12-2023   | 12-05-2024 | 100           | Workshop Management | 90            | US Dollar   | 3               | 12-12-2024   | 12-05-2025 | 100           |
      

    And Verify the created company is displayed in the searchlist
      | Company_Name |
      | SQL          |