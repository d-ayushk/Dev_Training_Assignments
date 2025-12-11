



process.on("message",(val)=>{
    let sum =0;
    for(let i =0;i<val;i++){
        sum+=1;
    }
    process.send(sum,()=>{
        process.exit(0);

    });
});
