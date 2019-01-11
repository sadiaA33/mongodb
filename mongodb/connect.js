const mongoose = require ("mongoose");

function connect(){
   mongoose.connect(
    "mongodb+srv://sadia:izma2007*@cluster0-yekvc.mongodb.net/test?retryWrites=true",
       
       {useNewUrlParser: true});
   console.log("connected to DB");
}
module.exports = connect;

