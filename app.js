const express=require('express')
const app=express()
const secPage=require('./secPage.js')

const servicePage=require('./services.js')
const HomePage=require('./HomePage.js')
const about=require('./about.js')
const contact=require('./contact.js')
app.get('/',(request,response) =>{
    
   response.send("Get Router on Home Page")
})
app.use('/secPage',secPage)

app.use('/services',servicePage)
app.use('/HomePage',HomePage)
app.use('/about',about)
app.use('/contact',contact)
app.listen(3800)