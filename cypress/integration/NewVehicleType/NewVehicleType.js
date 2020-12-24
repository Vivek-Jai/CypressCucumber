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

Given('Click the vehicle type submenu in administration menu',()=>
 {
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#VehicleTypes']")
    
})

Then('Click the add button and fill the form details',(datatable)=>
 {
    datatable.hashes().forEach(element =>{

    cy.clickByXpath("//button[@data-ng-click='AddNewVehicleType()']")

    cy.selectValueByXpath("//div[@id='s2id_dpdw_CompanyName']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Companyname)

    cy.enterTextByXpath("//input[@id='VchType_VehicleType']",element.VehicleType)

    cy.enterClearTextByXpath("//input[@data-ng-model='PredepartureDurationRed']",element.Redtext)
    cy.enterClearTextByXpath("//input[@data-ng-model='PredepartureDurationOrange']",element.Orangetext)
    cy.clickByXpath("//button[@data-ng-click='SaveVehicleType()']")
    cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Vehicle Type Saved Successfully")

    })
})

Then('Verify the created vehicle type is displayed in the vehicle type dropdown',(datatable)=>
 {
    

    datatable.hashes().forEach(element =>{

        cy.selectValueByXpathAssertion("//div[@id='s2id_ddlComapnyName']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Companyname)
        cy.selectValueByXpathAssertion("//div[@id='s2id_ddlVehicleType']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.VehicleType)


    })


 })