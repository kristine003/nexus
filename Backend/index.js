const express=require('express')
const cors=require('cors');
const app=new express();
const PORT=4000;
//connect the connection.js to server file
require('./connection');
const userData=require('./model/UserData')

app.use(express.json());
app.use(cors());
//API endpoint to fetch data from DB
app.get('/nexus',async(req,res)=>{
try{
    const data=await userData.find();
    res.send(data);
}
catch(error){
console.log("ERROR!")
}

})
//API endpoint to post a new movie data to the DB
app.post('/new-user',async(req,res)=>{

    try{
        var item=req.body;
        const dataitem=new userData(item);
        const saveddata=await dataitem.save();
        res.send('Post Sucessfull')
    }
    catch(error){
        console.log(error);
    }
})
//API endpoint for deleting the movie document
// app.delete('/userremoval/:id',async(req,res)=>{
//     try{
//         await userData.findByIdAndDelete(req.params.id);
//         res.send('Deleted Sucessfully');
//     }
//     catch(error){
//         console.log(error);
//     }
// })

//API endpoint for updating the movie document
app.put('/user-updation/:id',async(req,res)=>{
    try{
        await userData.findByIdAndUpdate(req.params.id,req.body);
        res.send('Updated Sucessfully');
    }
    catch(error){
        console.log(error);
    }
})

//checking whether the serve is live or not
app.listen(PORT,()=>{
    console.log("Server is running on Port Number: 4000");
})