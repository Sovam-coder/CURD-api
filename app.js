const express= require('express')
const mongoose= require('mongoose')
const url='mongodb://localhost/sovamdb'
const app=express()
mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
})

app.use(express.json())

const sovamRouter=require('./routers/sovam')
app.use('/sovam',sovamRouter)
app.listen(9000,() =>{
    console.log('server started')
})
