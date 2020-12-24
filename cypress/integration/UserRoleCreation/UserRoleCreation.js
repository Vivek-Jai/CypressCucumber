import { Given , And , When} from "cypress-cucumber-preprocessor/steps";

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

Given('Click the user submenu from the administration menu',()=>
 {
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#User']")
})


And ('Fill the user details form',(datatable)=>
 {
    datatable.hashes().forEach(element =>{
        
        //click new button
        cy.scrollTo('bottom')
        cy.clickByCSS(".mb-xs.mt-xs.mr-xs.modal-basic.btn.btn-primary i") 
         cy.wait(5000)

        //Fill the form details
        cy.selectValueByXpath("//div[@id='s2id_ddleCompanies']", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.CompanyName)
        cy.enterTextByXpath("//input[@placeholder='Enter First Name']",element.FirstName)
        cy.enterTextByXpath("//input[@placeholder='Enter Last Name']",element.LastName)
        cy.selectValueByXpath("//div[@id='s2id_ddleUserType']", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.UserType)
        cy.enterTextByXpath("//input[@id='txtLoginName']",element.LoginName)
        cy.enterTextByXpath("//input[@placeholder='Enter Password']",element.Password)
        cy.enterTextByXpath("//input[@placeholder='Re-enter Password']",element.RetypePassword)
        cy.enterTextByXpath("//input[@placeholder='Driving Licence Number']",element.DL_Number)
        cy.selectDateByXpath("//input[@data-ng-change='UserDetailsEditView.OtherDrivingLicenceRenewalDate.OnChange()']",element.DL_RenewDate)
        cy.selectValueByXpath("//div[@id='s2id_ddleLanguage']", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.Language)
        cy.enterTextByXpath("//input[@placeholder='Enter Address']",element.Address)
        cy.enterTextByXpath("//input[@placeholder='Enter Email Address']",element.Email)
        cy.enterTextByXpath("//input[@placeholder='Enter Phone Number']",element.Phone)
        cy.selectValueByXpath("//div[@id='s2id_ddleDepots']", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.Depot)
        cy.selectValueByXpath("//div[@id='s2id_ddleTypes']", "//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]", element.Type)
        cy.selectDateByXpath("//input[@data-ng-change='UserDetailsEditView.CompanyStartDate.OnChange()']",element.Company_SD)
        cy.enterTextByXpath("//input[@placeholder='Payroll Name']",element.PayrollName)
        cy.enterTextByXpath("//input[@placeholder='Payroll ID']",element.Payroll_ID)

        //click the toggle bar
        cy.clickByXpath("//span[@class='slider round']")

        //click save
        cy.clickByXpath(" //button[@data-ng-click='UserDetailsEditView.SaveAndContinue()']")

        //verify the toast message
        cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message","User Saved Successfully")
        
})

    
})