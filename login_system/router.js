const express = require('express')
var router = express.Router()

const credential = {
    email:"mogoba@gmail.com",
    password:"7425"
}


// login user
router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/router/dashboard')
        // res.end('success')
    }else{
        res.end('invalid user namae')
    }
})
// router for dashboad
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('kwenda huko')
    }
})
// route for logout
router.get('/logout',(req,res)=>{
    req.session.destroy(function(error){
        if(error){
            console.log(error)
        }else{
            res.render('base',{title:"express",logout:"logout sucessfull"})
        }
    })
})
module.exports = router;