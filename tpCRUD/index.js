const express=require('express');
const app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());




let cars = [
    {id:1,name:"clio"},
    {id:2,name:"megane"},
    {id:3,name:"range"}];
//get all
app.get('/all',(req,res)=>{
res.json(cars)
});

//get by id
app.get('/cars/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const car=cars.find((car)=>car.id===id);//find tparcouri 7ata lon fct traja3 true
    if(!car){
        res.status(404).send("car not found")
    }else{

        res.json(car);
    }
});
//add a new car
app.post("/new", (req, res) => {
    const {id,name}= req.body;
    if (!name || !id) {
        res.status(400).send("Please provide a valid car object with name and id");
        // status 400: Bad Request
    } else {
        const car={id , name};
        cars.push(car);
        res.status(201).json(car); // Changed to status 201: Created
    }
});

//update  a car
app.put ('/cars/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const updatedCar = req.body;
    const index=cars.findIndex(car=>car.id===id);
    if(index===-1){
        res.status(400).send('Car Not Found')
    }else{
        cars[index]=updatedCar;
        res.json(cars);
    }
});

//delete a car
app.delete('/cars/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const car = cars.find((car)=>car.id===id);
    if(!car){
        return res.status(404).send('Car is not in the Collection')
    }   
    cars.splice(car,1)
    //splice remove an existing element at a specific
    //the number of elements to remove from the array starting at the specified index.
    res.status(200).send('Removed Successfully')
})




    app.listen(3000,()=>
    {console.log("port is listening on port 3000")})