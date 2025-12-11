/*

Assignment 9:
1. Create a program for two files to communicate via event listeners and event emitters

*/

const { fork } = require("child_process");

const child = fork("./assignment9/question1file2.js");

child.send(100);

const getdata = new Promise((resolve, reject) => {
  child.on("message", (msg) => {
    resolve(msg);
  });
});
getdata.then((msg)=>console.log(msg));
