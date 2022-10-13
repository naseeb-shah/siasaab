 const { default: mongoose } = require('mongoose')
const mangoose=require('mongoose')


const sai=new Promise((res,rej)=>{
    const url='here your databse url'
    mongoose.connect(url,(err)=>{
        if(err){
            console.log(err)
           return rej()
        }
        console.log('connected')
        res()

    })
})