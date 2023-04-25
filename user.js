const express=require('express')
const router=express.Router()

router.get('/',(request,response)=>{
    response.send(`the third page`)
})

router.get('/:id',(request,response)=>{
    response.send(`the new user with id ${request.params.id}`)
})

const userid=[
    {
        name:'Navya'
    },
    {
        name:'Legend'
    }

]

router.param('userid',(request,response,next,id)=>{
    request.user=user[userid]
    
})



module.exports=router