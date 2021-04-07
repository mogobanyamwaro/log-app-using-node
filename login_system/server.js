
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')
const router = require('./router')

const app = express()
const port = process.env.PORT || 3003;
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')


// load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
// home route
app.get('/',(req,res)=>{
    res.render('base',{title:"login system"})
})
app.use('/router',router)

app.listen(port,()=>{
    console.log('server started')
})