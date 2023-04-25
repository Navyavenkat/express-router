const express=require('express')
const router=express.Router()
const arraylen=2
router.get('/',(request,response)=>{
    response.send("the new file ")
})
router.get('/:id',(request,response)=>{
    const userid=(request.params.id)
    if(userid<arraylen)
    {
        response.send(request.Nameofuser.name)
    }
    else{
        response.send('Invalid number');
    }
    response.send(request.Nameofuser.name)
})


const user=[{
    name:'Web Development'
},
{
    name:'Data Science'
}


]
router.param('id',(request,response,next,id)=>{
    request.Nameofuser=user[id]
    next()
})
module.exports=router