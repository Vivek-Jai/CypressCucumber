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
 

 When('the user click the Logout button',()=>
 {
    
    cy.clickByCSS("#userbox ul li a.dropdown-toggle.notification-icon")
 })

 Then('Verify the application is successfully Signoff',()=>
 {
     cy.xpath('//button[text()="Sign In"]').should('contain','Sign In')
 })




 
     
 