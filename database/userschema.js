const { default: mongoose } = require('mongoose')
const mangoose=require('mongoose')


const user=mongoose.Schema({
    username:String,
    userdata:Object,
    follow:Array,
    followers:Array,
    repo:Array
})

const sai=mongoose.Model('user',user)
module.exports=sai