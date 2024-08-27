const mongoose=require('mongoose');
const appSchema=mongoose.Schema({
    grpName:String,
    subject:String,
    description:String

})
const AppData=mongoose.model('approvals',appSchema);
module.exports=AppData