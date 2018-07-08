var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
   
    admin:{
        type:Boolean,
        //required:true
        default:false
    }

    
});
// to use the local mongoose of pasport supporting username and password

User.plugin(passportLocalMongoose);
module.exports=mongoose.model('User',User);
