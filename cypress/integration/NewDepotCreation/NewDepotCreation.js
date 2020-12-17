import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";


Given('Navigate to the application by using the URL',()=>
{
    cy.visit("http://182.76.145.115:50505/tzTestCVSafety/")
    
})

 When('The user enter the username and password',(datatable)=>
{
    datatable.hashes().forEach(element =>{
        cy.enterTextByCSS("input[name=username]",element.username)
        cy.enterTextByCSS("input[name=pwd]",element.password)  
            })
    
 })

 And('Click the signin button',()=>
  {
    cy.clickByXpath("//button[text()='Sign In']")
 })

 And('Verify the username is displayed in the dashboard',(datatable)=>
 {
    datatable.hashes().forEach(element =>{

        cy.get('#UserName',{timeout:7000}).should('contain.text',element.username)
    })
})

Given ('Click the depot menu in the megamenu',()=>
 {
   
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#Depots']")
})

Then('Click the new button', () => {

    cy.clickByCSS(".mb-xs.mt-xs.mr-xs.modal-basic.btn.btn-primary i")
})

And('Fill the depot form details and click save', (datatable) => {
    datatable.hashes().forEach(element => {

        //Select Company Name
        cy.selectValueByXpath("//div[@id='s2id_ddleCompany']", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.Company_Name)

        //Enter depotname,address,zipcode
        cy.enterTextByXpath("//input[@placeholder='Enter Depot Name']", element.Depot_Name)
        cy.enterTextByXpath("//input[@placeholder='Enter Address']", element.Address)
        cy.enterTextByXpath("//input[@placeholder='Enter Zip Code']", element.Zipcode)

        //enable the toggle
        cy.clickByXpath("(//label[@class='switch']/span)[1]")

        //select WTD
        cy.selectValueByXpath("//div[starts-with(@id,'s2id_autogen')]", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.WTD)

        //Enter driver flag missed due , vehicle flag missed due, Due soon
        cy.enterClearTextByXpath("//input[@data-ng-model='DepotEditView.DriverUploadMissedDays']", element.DriverFlagMissed)
        cy.enterClearTextByXpath("//input[@data-ng-model='DepotEditView.DriverUploadDueDays']", element.DriverFlagDue)
        cy.enterClearTextByXpath("//input[@data-ng-model='DepotEditView.VehicleUploadMissedDays']", element.VehicleFlagMissed)
        cy.enterClearTextByXpath("//input[@data-ng-model='DepotEditView.VehicleUploadDueDays']", element.VehicleFlagDue)
        cy.enterClearTextByXpath("//input[@data-ng-model='DepotEditView.PeriodicInspectionDueSoon']", element.Due_Soon)

        //enable toggle
        cy.clickByXpath("(//label[@class='switch']/span)[2]")
        cy.clickByXpath("(//label[@class='switch']/span)[3]")

        //enter the message to driver
        cy.enterTextByXpath("//input[@placeholder='Message to Driver']", element.MessageToDriver)

        //enable toggle
        cy.clickByXpath("(//label[@class='switch']/span)[4]")

        //Click save depot
        cy.clickByXpath("//button[@data-ng-click='DepotEditView.Save()']")

    })
})

Then('Verify the created depotname is displayed in the depot search dropdown', (datatable) => {

    cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Depot Created Successfully")

    datatable.hashes().forEach(element => {

        //Verify the depotname is displayed in depot search dropdown
        cy.selectValueByXpathAssertion("//div[@id='s2id_ddlDepot']", "//div[@id='select2-drop']/div/input", "//div[starts-with(@id,'select2-result-label')]", element.Depot_Name)
    })
})