const express=require('express')
const app=express()


const UserPage=require('./users.js')


//app.use(express.static('Public'))


app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.get('/',(request,response) =>{
    
   response.render("index", {text:'qwerty'})
})

app.use('/users',UserPage)

app.listen(3800)