const express = require('express')
const app = express()
const port = 5000

const verif=(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentHour = currentDate.getHours()
    if (currentDay == 0 || currentDay == 6 || currentHour>17 || currentHour<9) {
        return res.sendFile(__dirname+'/Application/Error.html')
    } 

    next()
  


}
/*Home*/
app.get('/Home',verif,(req,res)=>{
         res.sendFile(__dirname+'/Application/Home.html')
     })
/*Contact*/
app.get('/Contact',verif,(req,res)=>{
    res.sendFile(__dirname+'/Application/Contact.html')
})
/*Services*/
app.get('/Services',verif,(req,res)=>{
    res.sendFile(__dirname+'/Application/Services.html')
})
app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/Application/style.css')
})


app.listen(port,console.log(`the server is ranning on the port ${port}`))