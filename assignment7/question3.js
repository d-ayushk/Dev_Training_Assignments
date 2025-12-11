/*  
3. Create two functions add (a,b) and multiply (a,b). Call add, then use the result of add 
function to calculate product with 10. Using all four ways: callback, promise, async-await 
and convert callback to promise using promisify.  
*/
const {promisify} = require("util")

class Callback {
  constructor(a, b) {
    this.sum(a, b, this.mul);
  }

  sum(a, b,mul) {
    mul(null,a + b);
  }

  mul(error,a) {
    if(error) console.log(error);
    console.log(a * 10);
  }
}

new Callback(5,2);

////////////////////////////////////

class Promisee{
    constructor(a,b){
        this.sum(a,b).then((res)=>console.log(res*10));
    }
    sum(a,b){
        return new Promise((resolve,reject)=>{
            resolve(a+b);
        });
    }
}

new Promisee(5,2);

////////////////////////////////////////////////////////////


class Async{
    constructor(a,b){
        this.dosome(a,b);
    }
    async dosome(a,b){
        let sm = await new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(a+b),1000);
        });

        console.log(sm*10);
    }

}

new Async(2,5);


////////////////////////////////////////////////////////////////////////



class Callback2 {
  sum(a, b,mul) {
    mul(null,a + b);
  }
}


let objj = new Callback2();
summ = promisify(objj.sum.bind(this));
summ(2,5).then((res)=>console.log(res*10));


