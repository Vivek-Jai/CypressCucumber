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

Given('Click the company submenu from the administration menu',()=>
 {
     
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#Company']")
})

Then('Fill the General form details',(datatable)=>
 {
      
     

     datatable.hashes().forEach(element =>
        {

            cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#Company']")

             //click Add new company button    
     cy.clickByXpathHidden("//button[@class='mb-xs mt-xs mr-xs modal-basic btn btn-primary'][2]")

            //entering companyname
           cy.enterTextByCSS("#cmp_CompanyName",element.Company_Name)
            
            //selecting companytype
            cy.selectValueByXpath("//div[@id='s2id_dpdw_CompanyType']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Company_Type)
            
            //Entering company address
            cy.enterTextByCSS("#cmp_Address1",element.Address)

            //Selecting country
           cy.selectValueByXpath("//div[@id='s2id_dpdw_Country']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Country)
            
           //Entering phone number
            cy.enterTextByCSS("#cmp_Phone",element.Phone)

            //Selecting Currency
           cy.selectValueByXpath("//div[@id='s2id_dpdw_Currency']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.Currency)
            
            //Selecting SalesRep
            cy.selectValueByXpath("//div[@id='s2id_dpdw_SalesRep']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.SalesRep)
            
            //Check the CheckBox
            cy.clickByCSS("#Chk_isActiver")
            
        
            //Select the startdate of company
            cy.selectDateByCSS("#StartDate",element.StartDate)
            
            // click next button
            cy.clickByXpathHidden("(//button[@class='btn btn-primary'])[1]")
        
    
           //click lincensemodel
            cy.selectValueByXpath("//div[@id='s2id_dpdw_LicenseModel']","//div[@id='select2-drop']/div//input","//div[starts-with(@id,'select2-result-label')]",element.LincenseModel)
            
            //Enter the no of login
            cy.enterTextByCSS("#cmp_NoOfLogins",element.No_of_Login)

            //Enter no of DD
            cy.enterTextByCSS("#cmp_NoOfDigitalDrivers",element.No_of_DD)

            //Enter no of AD
            cy.enterTextByCSS("#cmp_NoOfAnalogueDrivers",element.No_of_AD)

            //Select lincensedate
            cy.selectDateByCSS("#LicenseActivationDate", element.LinceseActivateDate)

            //Select  Expiry date
            
            cy.selectDateByCSS("#ExpiryDate", element.ExpiryDate)

            // click next button
            cy.clickByXpathHidden("(//button[@class='btn btn-primary'])[2]")

        
            cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[3]").each(($el,index,$list)=>{

              let modulename=  $el.text()

              console.log(modulename)

              switch(modulename){

                 case 'Driver Connect':

                  cy.DC_Module(element.DC_AnnualRate,element.DC_Currency,element.DC_BillingCycle,element.DC_StartDate,element.DC_FD,element.DC_Contracted,index)

                  break;

                case 'Incident Management':

                   cy.IM_Module(element.IM_AnnualRate,element.IM_Currency,element.IM_BillingCycle,element.IM_StartDate,element.IM_FD,element.IM_Contracted,index)
                 
                   break;

                case 'Tachograph Analysis':

                    cy.TA_Module(element.TA_AnnualRate,element.TA_Currency,element.TA_BillingCycle,element.TA_StartDate,element.TA_FD,element.TA_Contracted,index)

                    break;

                case 'Vehicle Checks':
                   
                     cy.VC_Module(element.VC_AnnualRate,element.VC_Currency,element.VC_BillingCycle,element.VC_StartDate,element.VC_FD,element.VC_Contracted,index)
                
                     break;

                case 'Workshop Management':

                    cy.WM_Module(element.WM_AnnualRate,element.WM_Currency,element.WM_BillingCycle,element.WM_StartDate,element.WM_FD,element.WM_Contracted,index)
                   
                    break;
              }

        
                    
})
        
            //click save form
           cy.clickByXpath("//button[@class='nexttab btn btn-primary']")
           cy.clickByXpath("//div[@class='form-group' and @data-ng-show='ShowSavebtn']/div[@class='col-sm-9 col-sm-offset-11']/button")

           cy.Verify_Toastmessage_notEqualTo("#toast-container > div > div.toast-message",'Company Saved Successfully')

            
            
})
 })
        

 And('Verify the created company is displayed in the searchlist',(datatable)=>{
    
    cy.clickByXpathHidden("//ul[@id='TranzauraAdminLogin']//ul[@class='submenulist adminsub']/li/a[@href='#Company']")
        
    datatable.hashes().forEach(element =>
           {
                 
                cy.wait(50000)
                cy.selectValueByXpathAssertion("//div[@id='s2id_ddlComapnyName']","//div[@id='select2-drop']/div/input","//div[starts-with(@id,'select2-result-label')]",element.Company_Name)
            
            })
 })
        
   
    
    
    



 






 
     
