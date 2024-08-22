const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://kristinevt2004:atlas03@cluster0.3xvdwy2.mongodb.net/nexDB?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>{
    console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected');
})