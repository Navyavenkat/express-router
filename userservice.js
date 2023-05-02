const express=require('express')
const router=express.Router()

router.get('/new',(request,response)=>{
    response.render("User/new")
}
)
router.post('/',(request,response)=>{
    const isValidUser=true
    if(isValidUser)
    {
        user.push({name:request.body.firstName})
        response.redirect(`user/${user.length-1}`)
    }
    else{
        console.log("Error");
        response.render('User/new',{firstName:request.body.firstName})
    }
    console.log(request.body.firstName)
    response.send("created")
})
router.get('/',(request,response)=>{
    response.send("the new file ")
})
/*router.get('/:id',(request,response)=>{
    const userid=(request.params.id)
    if(userid<arraylen)
    {
        response.send(request.body.firstname)
    }
    else{
        response.send('Invalid number');
    }
    response.send(request.body.firstname)
})*/


const user=[{
    name:'Web Development'
},
{
    name:'Data Science'
}


]
/*router.param('id',(request,response,next,id)=>{
    request.Nameofuser=user[id]
    next()
})*/
module.exports=router