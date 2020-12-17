import { Given , And ,Then , When} from "cypress-cucumber-preprocessor/steps";



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

Given('click the check managment submenu',()=>
 {
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist vehiclesub']/li/a[@href='#SurveyCheck']")

})

When('Select the company,vehicle type and then fill the pre-depature question and verify the toast message',(datatable)=>
 {
    datatable.hashes().forEach(element => {

        
        cy.selectValueByXpath("//div[@id='s2id_ddlCompany']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Companyname)
        cy.selectValueByXpath("//div[@id='s2id_ddlVehicleType']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Vehicle_Type)
        cy.clickByXpath("(//header[@class='panel-heading2 portlet-handler']//button)[1]")
        cy.wait(3000)
        cy.enterTextByXpath("//input[@id='CheckName']",element.Checkname)
        cy.enterTextByXpath("//textarea[@id='CheckInfo']",element.Checkinfo)

        cy.xpath("//label[@class='checkbox-inline']").each(($el,index,$list)=>
        {
            var radiobutton =$el.text().trim()
            

            if(radiobutton==element.Req_answer)
            {
                cy.xpath("//label[@class='checkbox-inline']").eq(index).click()
            }

            if(radiobutton==element.Priority)
            {
                
                cy.xpath("//label[@class='checkbox-inline']").eq(index).click()
            }

        })

       cy.clickByXpath("//button[@id='btnsubmit']")
       cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Check Added Successfully")



        

    })

})


Then('click the check back button',()=>
 {
    cy.get('.mb-xs.mt-xs.mr-xs.btn.btn-primary').contains('Back To Checks ').click()

})

Given('Fill the onroad check question and verify the toast message',(datatable)=>
 {
    datatable.hashes().forEach(element => {

        
        cy.selectValueByXpath("//div[@id='s2id_ddlCompany']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Companyname)
        cy.selectValueByXpath("//div[@id='s2id_ddlVehicleType']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Vehicle_Type)
        cy.clickByXpath("(//header[@class='panel-heading2 portlet-handler']//button)[2]")
        cy.wait(3000)
        cy.enterTextByXpath("//input[@id='CheckName']",element.Checkname)
        cy.enterTextByXpath("//textarea[@id='CheckInfo']",element.Checkinfo)

        cy.xpath("//label[@class='checkbox-inline']").each(($el,index,$list)=>
        {
            var radiobutton =$el.text().trim()
            

            if(radiobutton==element.Req_answer)
            {
                cy.xpath("//label[@class='checkbox-inline']").eq(index).click()
            }

            if(radiobutton==element.Priority)
            {
                
                cy.xpath("//label[@class='checkbox-inline']").eq(index).click()
            }

        })

       cy.clickByXpath("//button[@id='btnsubmit']")
       cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Check Added Successfully")



        

    })

})

Then('click the check back button',()=>
 {
    cy.get('.mb-xs.mt-xs.mr-xs.btn.btn-primary').contains('Back To Checks ').click()

})


Given('Fill the final check question and verify the toast message',(datatable)=>
 {
    datatable.hashes().forEach(element => {
        
        
        cy.selectValueByXpath("//div[@id='s2id_ddlCompany']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Companyname)
        cy.selectValueByXpath("//div[@id='s2id_ddlVehicleType']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Vehicle_Type)
        cy.clickByXpath("(//header[@class='panel-heading2 portlet-handler']//button)[3]")
        cy.wait(3000)
        cy.enterTextByXpath("//input[@id='CheckName']",element.Checkname)
        cy.enterTextByXpath("//textarea[@id='CheckInfo']",element.Checkinfo)

        cy.xpath("//label[@class='checkbox-inline']").each(($el,index,$list)=>
        {
            var radiobutton =$el.text().trim()
            

            if(radiobutton==element.Req_answer)
            {
                cy.xpath("//label[@class='checkbox-inline']").eq(index).click()
            }

            if(radiobutton==element.Priority)
            {
                
                cy.xpath("//label[@class='checkbox-inline']").eq(index).click()
            }

        })

       cy.clickByXpath("//button[@id='btnsubmit']")
       cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Check Added Successfully")



        

    })

})

