// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("enterTextByXpath", (Webelement,Value) => {

    cy.xpath(Webelement).type(Value)
        

})

Cypress.Commands.add("enterTextByCSS", (Webelement,Value) => {

    cy.get(Webelement).type(Value)
        

})

Cypress.Commands.add("enterClearTextByXpath", (Webelement,value) => {

   
    cy.xpath(Webelement).clear().type(value)   

})

Cypress.Commands.add("clickByXpath", (Webelement) => {

    cy.xpath(Webelement).click()
        

})

Cypress.Commands.add("clickByCSS", (Webelement) => {

    cy.get(Webelement,{timeout:7000}).click()
        

})

Cypress.Commands.add("clickByXpathHidden", (Webelement) => {

    cy.xpath(Webelement).click({force:true})
        

})

Cypress.Commands.add("clickByCSSHidden", (Webelement) => {

    cy.get(Webelement).click({force:true})
        

})

Cypress.Commands.add("selectDateByXpath", (Webelement,date) => {

    cy.xpath(Webelement).clear({force:true}).type(date ,{force:true})
        

})

Cypress.Commands.add("selectDateByCSS", (Webelement,date) => {

    cy.get(Webelement).clear({force:true}).type(date,{force:true})
        

})

Cypress.Commands.add("selectValueByXpath", (Webelement1,Webelement2,Webelement3,value) => {
    cy.wait(5000)
    cy.xpath(Webelement1).click()
    cy.xpath(Webelement2,{timeout:7000}).type(value)
    cy.xpath(Webelement3).find('.select2-match').contains(value).click()
        

})

Cypress.Commands.add("selectValueByXpathAssertion", (Webelement1,Webelement2,Webelement3,value) => {

    cy.wait(3000)
    cy.xpath(Webelement1).click()
    cy.xpath(Webelement2,{timeout:7000}).clear({force:true}).type(value)
    cy.xpath(Webelement3).find('.select2-match').should('have.text',value).click()
        

})

Cypress.Commands.add("DC_Module", (annualrate,currency,billingcycle,billingSD,billingFD,drivercount,index) => {

    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[4]/input").eq(index).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[6]/input").eq(index).type(annualrate)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[7]/div").eq(index).click()
    cy.xpath("//div[@id='select2-drop']/div/input").type(currency)
    cy.xpath("//div[starts-with(@id,'select2-result-label')]").find('.select2-match').contains(currency).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[8]/input").eq(index).type(billingcycle)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[9]/datepicker/input").eq(index).clear({force:true}).type(billingSD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[10]/datepicker/input").eq(index).clear({force:true}).type(billingFD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[11]/input").eq(index).type(drivercount)

})

Cypress.Commands.add("IM_Module", (annualrate,currency,billingcycle,billingSD,billingFD,drivercount,index) => {

    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[4]/input").eq(index).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[6]/input").eq(index).type(annualrate)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[7]/div").eq(index).click()
    cy.xpath("//div[@id='select2-drop']/div/input").type(currency)
    cy.xpath("//div[starts-with(@id,'select2-result-label')]").find('.select2-match').contains(currency).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[8]/input").eq(index).type(billingcycle)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[9]/datepicker/input").eq(index).clear({force:true}).type(billingSD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[10]/datepicker/input").eq(index).clear({force:true}).type(billingFD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[11]/input").eq(index).type(drivercount)

})

Cypress.Commands.add("TA_Module", (annualrate,currency,billingcycle,billingSD,billingFD,drivercount,index) => {

    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[4]/input").eq(index).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[6]/input").eq(index).type(annualrate)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[7]/div").eq(index).click()
    cy.xpath("//div[@id='select2-drop']/div/input").type(currency)
    cy.xpath("//div[starts-with(@id,'select2-result-label')]").find('.select2-match').contains(currency).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[8]/input").eq(index).type(billingcycle)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[9]/datepicker/input").eq(index).clear({force:true}).type(billingSD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[10]/datepicker/input").eq(index).clear({force:true}).type(billingFD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[11]/input").eq(index).type(drivercount)

})

Cypress.Commands.add("VC_Module", (annualrate,currency,billingcycle,billingSD,billingFD,drivercount,index) => {

    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[4]/input").eq(index).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[6]/input").eq(index).type(annualrate)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[7]/div").eq(index).click()
    cy.xpath("//div[@id='select2-drop']/div/input").type(currency)
    cy.xpath("//div[starts-with(@id,'select2-result-label')]").find('.select2-match').contains(currency).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[8]/input").eq(index).type(billingcycle)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[9]/datepicker/input").eq(index).clear({force:true}).type(billingSD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[10]/datepicker/input").eq(index).clear({force:true}).type(billingFD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[11]/input").eq(index).type(drivercount)

})

Cypress.Commands.add("WM_Module", (annualrate,currency,billingcycle,billingSD,billingFD,drivercount,index) => {

    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[4]/input").eq(index).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[6]/input").eq(index).type(annualrate)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[7]/div").eq(index).click()
    cy.xpath("//div[@id='select2-drop']/div/input").type(currency)
    cy.xpath("//div[starts-with(@id,'select2-result-label')]").find('.select2-match').contains(currency).click()
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[8]/input").eq(index).type(billingcycle)
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[9]/datepicker/input").eq(index).clear({force:true}).type(billingSD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[10]/datepicker/input").eq(index).clear({force:true}).type(billingFD ,{force:true})
    cy.xpath("//table[@id='BTableEdit']/tbody/tr/td[11]/input").eq(index).type(drivercount)

})

Cypress.Commands.add("Verify_Toastmessage_notEqualTo", (Webelement,Textvalue) => {

    cy.get(Webelement).should(($toast)=>
    {

        var sucessMessage =$toast.text()
        //expect(sucessMessage).to.eq('Company Saved Successfully')
        expect(sucessMessage).not.to.eq(Textvalue)
    })
    
})

Cypress.Commands.add("Verify_Toastmessage_EqualTo", (Webelement,Textvalue) => {

    cy.get(Webelement).should(($toast)=>
    {

        var sucessMessage =$toast.text()
        expect(sucessMessage).to.eq(Textvalue)
    })
    
})






