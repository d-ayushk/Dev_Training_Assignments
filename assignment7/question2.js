// 2. Show the use of promisify with example code.

const { promisify } = require("util");

function sum(a, b, report) {
  let sm = a + b;
  report(null, sm);
}

const dosum = promisify(sum);

dosum(1, 3).then((res)=>console.log(`The sum is:${res}`));
