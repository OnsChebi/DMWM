
const express =require("express")//module kolou 7atineh fu variable
const app=express()//3malna mnou instance
//bch niportiw auth
const auth=require('./routes/auth')
const post=require('./routes/post')

app.use(express.json());//bch automatiquement yparsi body indirectement 
//melowel yodhher undefined 5tr body encoded donc n3aytou l middleware
//bch ynedi ll auth.js
app.use('/auth',auth)
//ynedi ll file post.js
app.use('/post',post)
//bch nasn3ou serveur s8ir
app.listen(5000,()=>{
    console.log('listening on port 5000');
});
