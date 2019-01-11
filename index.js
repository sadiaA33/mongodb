const Example = require('./mongodb/schema/example');
const mongoConnect = require ('./mongodb/connect')
mongoConnect ();

let example = new Example ({
    name: "someone",
    age: 25,
    DOB: new Date("13 December,1993")
});
example.save();