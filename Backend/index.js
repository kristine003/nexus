const express=require('express')
const cors=require('cors');
const app=new express();
const PORT=4000;
//connect the connection.js to server file
require('./connection');
const userData=require('./model/UserData')
const groupData=require('./model/GroupData');
const appData=require('./model/AppData');


app.use(express.json());
app.use(cors());

//API endpoint to fetch user data from DB
app.get('/nexus',async(req,res)=>{
try{
    const data=await userData.find();
    res.send(data);
}
catch(error){
console.log("ERROR!")
}
})

//API endpoint to fetch group data from DB
app.get('/groups',async(req,res)=>{
    try{
        const data=await groupData.find();
        res.send(data);
    }
    catch(error){
    console.log("ERROR!")
    }
})

//API endpoint to fetch approved group data from DB
app.get('/approvals', async (req, res) => {
    try {
      const data = await appData.find();
      res.send(data);
    } catch (error) {
      console.log("ERRORa!");
    }
  });

//API endpoint to post a new user data to the DB
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

//API endpoint to post a new group data to the DB
app.post('/new-group',async(req,res)=>{

    try{
        var item=req.body;
        const dataitem=new groupData(item);
        const saveddata=await dataitem.save();
        res.send('Post Sucessfull')
    }
    catch(error){
        console.log(error);
    }
})

//API endpoint to approve a new group data to the DB
app.post('/new-app',async(req,res)=>{

    try{
        var item=req.body;
        const dataitem=new appData(item);
        const saveddata=await dataitem.save();
        res.send('Approval Sucessfull')
    }
    catch(error){
        console.log(error);
    }
})

// API endpoint for deleting the user document
app.delete('/userremoval/:id',async(req,res)=>{
    try{
        await userData.findByIdAndDelete(req.params.id);
        res.send('Deleted Sucessfully');
    }
    catch(error){
        console.log(error);
    }
})

// API endpoint for deleting the group document
app.delete('/groupremoval/:id',async(req,res)=>{
    try{
        await groupData.findByIdAndDelete(req.params.id);
        res.send('Deleted Sucessfully');
    }
    catch(error){
        console.log(error);
    }
})

// API endpoint for deleting the group document
app.delete('/grpremoval/:id',async(req,res)=>{
    try{
        await appData.findByIdAndDelete(req.params.id);
        res.send('Deleted Sucessfully');
    }
    catch(error){
        console.log(error);
    }
})

//API endpoint for updating the user document
app.put('/user-updation/:id',async(req,res)=>{
    try{
        await userData.findByIdAndUpdate(req.params.id,req.body);
        res.send('Updated Sucessfully');
    }
    catch(error){
        console.log(error);
    }
})

//API endpoint for updating the group document

app.patch('/group-updation/:id', async (req, res) => {
    try {
      await groupData.findByIdAndUpdate(req.params.id,req.body, { new: true });
      res.send('Updated Successfully');
    } catch (error) {
      console.log(error);
    }
  });
  

//checking whether the serve is live or not
app.listen(PORT,()=>{
    console.log("Server is running on Port Number: 4000");
})