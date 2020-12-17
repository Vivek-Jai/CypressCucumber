const csvtojson = require('csvtojson')
const fs = require('fs')

const csvfilepath = "CompanyRegData.csv"

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)

    fs.writeFileSync("./cypress/fixtures/CompanyReg.json",JSON.stringify(json),"utf-8",(err) => {
        if(err) console.log(err)
    })
})