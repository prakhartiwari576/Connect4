const express =require('express');
const router = new express.Router();

router.post('/check',(req,res)=>{
    console.log(req.body);
})
// bsdk idhr likh backend
// route mei body nhi aa rhi dekh woh bhi kya scene



module.exports = router;