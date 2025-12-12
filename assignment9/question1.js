/*

Assignment 9:
1. Create a program for two files to communicate via event listeners and event emitters

*/

const emitter = require("events");
const emt1 = require("./question1file2");
require("./question1file2");


emt1.on("getdata",(data)=>{
  console.log("\n",data.sum);
});

emt1.emit("givedata",{a:10,b:5});

