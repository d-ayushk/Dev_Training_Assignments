const fs = require("fs");

console.log("Start"); // no async here

setTimeout(()=>console.log("Hello from timeout"),0);    // timer 

setImmediate(()=>console.log("From set Immediate"));  // check queue

process.nextTick(()=>console.log("From nexttick"));  // microtask queue executed first

let val= Promise.resolve("Hello from promise");   
val.then((res)=>console.log(res));         // microtask queue promise the

fs.readFile("data.txt", "utf8", (err, data) => {    // file read/write
  if (err) throw err;
  console.log("File contents:", data);
});

console.log("End"); // running with normal flow of program
