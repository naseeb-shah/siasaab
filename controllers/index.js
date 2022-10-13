 const express= require('express')
 const user= express.Router()
const axios= require('axios')
const userschema=require('./database/userschema')

 user.get("/:name",async(req,res)=>{
    const {name}=req.params
var followers,repos,userdata,following

    axios.get(`https://api.github.com/search/users?q=${name}`)
 .then(async(x)=>{
    userdata=x.data
//     var log=userdata.login
//     await axios.get(`https://api.github.com/users/${name}/followers`).then((x)=>followers=x.data)
//     await axios.get(`https://api.github.com/users/${name}/repos`).then((x)=>repos=x.data)
//     await axios.get(`https://api.github.com/users/${name}/following`).then((x)=>following=x.data)
//     https://api.github.com/users/naseeb-shah/following
//     console.log('--------------------------------------------------')
//    console.log(userdata.item)
//    console.log('----------------------foloowres----------------------------')
// // console.log(followers)
// console.log('----------------------respos----------------------------')
// // console.log(repos)
// console.log('----------------------following----------------------------')
// // console.log(following)
res.send({
   data:userdata
})

 }).catch((e)=>res.send(e.response.data))

 
 

 })


 user.get('/det/:name',async(req,res)=>{
const {name}=req.params
var followers,repos,following
axios.get(`https://api.github.com/search/users?q=${name}`)

await axios.get(`https://api.github.com/users/${name}/followers`).then((x)=>followers=x.data)
await axios.get(`https://api.github.com/users/${name}/repos`).then((x)=>repos=x.data)
await axios.get(`https://api.github.com/users/${name}/following`).then((x)=>following=x.data)
// https://api.github.com/users/naseeb-shah/


res.send({
   follow:followers,
   repos:repos,
   following:following
})

 })


 module.exports=user