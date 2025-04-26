const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passwordlocalMongoose = require("passport-local-mongoose");
const userSchema = new Schema({
    email:{
        type:String,
        required:true,
    }
});
userSchema.plugin(passwordlocalMongoose);
module.exports=mongoose.model("User",userSchema)