/*function hello(){console.log("hello world");}
hello();

function som(a,b){
return a+b}
const s = som(
15,20);
console.log(s);*/

const express =require("express")//module kolou 7atineh fu variable
const app=express();//3malna mnou instance
const mongoose = require("mongoose");
const dotenv=require('dotenv');
dotenv.config()// bch ywali ya3rf var eli fi .env
const MONGO_URL=process.env.MONGO_URL;
const port=process.env.port || 5000;
const posts=require('./routes/post');

app.use('/posts',posts)


 






//bch ki n7elou 3l localhost:5000 traja3 welcome
app.get('/',(req, res)=>{
    res.json({success:200,message:'response successful'});
//bch ki n7elou 3l localhost:5000 traja3 welcome
    //res.send('welcome')
    //res.director
    
    //res.status
})
app.get('/exp',(req,res,next)=>{
    console.log('test exp 1');
    next();
},(req,res)=>{res.send('heyy');
});


app.get("/test",(req,res)=>{
    res.status(404).end();
});
app.get("/test1",(req,res)=>{
    res.status(404).send("not found");
});

app.get("/test2",(req,res)=>{
    res.redirect(301,"https://www.google.com");
});

//*************************parametre d'une rq http ************************/
app.get('/param',(req,res)=>{
    res.send(req.query.name)
})
///////////////////// http://localhost:5000/param/?name=Ons
//? on la récupere avec req.query


//       http://localhost:5000/chebbi/Ons
app.get('/:prenom/:nom',(req,res)=>{
    const name =req.params.prenom;
    const lname =req.params.nom;
    res.send(`hey ${name} ${lname}`);
})

//then traitement async 3ibara promise
mongoose.connect(MONGO_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`listening on ${port}`);
    })
}).catch((err)=>{
    console.error('Error connecting to mongodb:',err.message)

})
//serveur ma3ach y5dm ken ma nconnectiw 3 DB
//bch nasn3ou serveur s8ir
module.exports=app;
