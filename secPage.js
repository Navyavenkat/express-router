const express=require('express')
const router=express.Router()

router.get('/',(request,response)=>{
    response.send("the second page value is"+request.params.id)
}
)

router.get('/:id',(request,response)=>{
    if(request.params.id==18){
            response.send("The service is : Web Development")
    }
})

router.get('/',(request,response)=>{
    response.send("hloo")
})
module.exports=router