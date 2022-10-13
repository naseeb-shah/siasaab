 const express= require('express')
const  user =require ('./controllers/index.js')
const cors=require('cors')
 const app= express()
// console.log(user)
app.use(cors())
 app.use('/user',user) 
 










 app.listen(8080,e=>{
    e?console.log(e):console.log('sarver is started 8080')
 })
