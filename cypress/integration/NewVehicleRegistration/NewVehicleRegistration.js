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

Given('Click the vehicle submenu in administration menu',()=>
 {
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#Vehicles']")
    
})

Then('Fill the required form fields and click save',(datatable)=>
 {
    datatable.hashes().forEach(element =>{


        cy.clickByXpath("//button[@data-ng-click='AddNewHiredVehicle()']")
        cy.selectValueByXpath("//div[@id='s2id_dpdw_Company']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Companyname)
        cy.enterTextByXpath("//input[@id='VehicleRegistration']",element.VehicleRegno)
        cy.selectValueByXpath("//div[@id='s2id_dpdw_Depot']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Depot)
        cy.enterTextByXpath("//input[@id='FleetId']",element.FleetID)   
        cy.selectValueByXpath("//div[@id='s2id_dpdw_Type']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Vehicletype)
        cy.selectValueByXpath("//div[@id='s2id_dpdw_CostCenter']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Costcenter)
        cy.selectValueByXpath("//div[@id='s2id_dpdw_OwnershipStatus']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Ownership)
        cy.selectValueByXpath("//div[@id='s2id_dpdw_Manufacturer']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Manufacter)
        cy.enterTextByXpath("//input[@id='Maxheigth']",element.Height)
        cy.enterTextByXpath("//input[@id='MaxWeigth']",element.Weight)
        cy.enterTextByXpath("//input[@id='UnladenWeigth']",element.Unladenweight)
        cy.enterTextByXpath("//input[@id='Axle']",element.Axle)
        cy.clickByXpath("//input[@id='IsTachographVehicle']")
        cy.clickByXpath("//button[@data-ng-click='SaveCompanyVehicleInfo()']")
        cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Vehicle Saved Sucessfully..")


    })
    
})

And('Verify the created vehicle registartion id is displayed in the registration dropdown',(datatable)=>
 {
    datatable.hashes().forEach(element =>{
    cy.selectValueByXpathAssertion("//div[@id='s2id_ddlComapnyName']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Companyname)
    cy.selectValueByXpathAssertion("//div[@id='s2id_ddlVehicle']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.VehicleRegno)
    cy.selectValueByXpathAssertion("//div[@id='s2id_ddlFleet']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.FleetID)    



    })

})

