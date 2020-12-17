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

When('Select the company,vehicle type and then fill the survey question and verify the toast message',(datatable)=>
 {
    datatable.hashes().forEach(element => {

        
        cy.selectValueByXpath("//div[@id='s2id_ddlCompany']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Companyname)
        cy.selectValueByXpath("//div[@id='s2id_ddlVehicleType']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Vehicle_Type)
        cy.clickByXpath("(//header[@class='panel-heading2 portlet-handler']//button)[1]")
        cy.wait(3000)
        cy.clickByXpath("//a[text()=' + Add New Survey Question']")
        cy.selectValueByXpath("//div[@id='s2id_ddlQuestionType']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Survey_questiontype)

       cy.enterTextByXpath(" //input[@name='txtSurveyQuestionTitle']",element.Survey_questionname)
       cy.enterTextByXpath(" //input[@name='txtSurveyQuestionText']",element.Survey_questiontext)

       cy.enterClearTextByXpath("//input[@data-ng-model='Survey.PeriodicNumber']",element.Repeat)

       if(element.Week=='Week')
       {
        cy.selectValueByXpath("//div[@id='s2id_ddlRepeadType']","//div[@id='select2-drop']/div//input", "//div[starts-with(@id,'select2-result-label')]",element.Week)
       }
      
       if(element.Day1=='Mon')
       {
       cy.xpath("//div[@data-ng-click='OnDaySelected(day)']").eq(0).click()
       }

       if(element.Day2=='Tue')
       {
       cy.xpath("//div[@data-ng-click='OnDaySelected(day)']").eq(1).click()
       }

       if(element.Day3=='Wed')
       {
       cy.xpath("//div[@data-ng-click='OnDaySelected(day)']").eq(2).click()
       }

       if(element.Day4=='Thu')
       {
       cy.xpath("//div[@data-ng-click='OnDaySelected(day)']").eq(3).click()
       }

       if(element.Day5=='Fri')
       {
       cy.xpath("//div[@data-ng-click='OnDaySelected(day)']").eq(4).click()
       }
           
        

        cy.selectDateByXpath("//input[@data-ng-model='Survey.EndDate']",element.End_date)

       cy.clickByXpath("//button[@data-ng-click='UpdateSurvey(Survey)']")
       cy.Verify_Toastmessage_EqualTo("#toast-container > div > div.toast-message", "Survey Added Successfully")
       cy.get('.mb-xs.mt-xs.mr-xs.btn.btn-primary').contains('Back To Checks ').click()



        

    })

})


