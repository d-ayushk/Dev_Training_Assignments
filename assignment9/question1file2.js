
const emitter = require("events");
const senderr = require("./question1");
require("./question1");
const emt1 = new emitter();

emt1.on("givedata",(data)=>{
    console.log("data from program file 1");
    emt1.emit("getdata",{sum:data.a+data.b});
});

module.exports = emt1;
