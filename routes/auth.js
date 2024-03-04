const express =require("express");//module kolou 7atineh fu variable
const router=express.Router();
const user=require('../models/user');


//3malna route (kol route 3ndou fcts te3ou wa7dou)
router.post('/create',(req,res)=>{
    console.log(req.body)
})

router.get('/',(req,res)=>{
    res.send('heyy Ons')
})

router.get('/login',(req,res)=>{
    res.send('heyy login')
})
router.get('/register',(req,res)=>{
    res.send('heyy register')
})

router.post('/register',async(req,res)=>{
    try{

        const{username,password}=req.body;//distracting bch tfark les attributs trod kol we7d var
        const user = new User ({username,password});//bch n7adhrou object lli bch yt7at fl DB
        await user.save();//l'enregistrement sar
        res.status(201).send('user registred successflly');
    }catch(error){
        res.status(400).send(error.message)
    }
})

//user login 

router.post('/login',async (req,res)=>{
    try {
     const {username,password}=req.body;
     const user = await User.findOne({username: username});
     if(!user){
         return res.status(404).send('user not found')
     }
     const isPasswordMatch =await bcrypt.compare(password,user.password);
   if(!isPasswordMatch){
     return res.status(401).send('invalid password')
    }
    } catch (error) {
     res.status(400).send(err.message)
    }
 });
module.exports=router//bch module ywali exportable 