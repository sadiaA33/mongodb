const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    name: {type :String , required : true},
    age: {type :Number , required : true},
    DOB: {type :Date , required : true}
});

module.exports = mongoose.model(
    'Example',
    exampleSchema
);