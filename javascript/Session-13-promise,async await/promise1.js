let my_promise= new Promise(function(resolve,reject){

    count=1;
    setTimeout(function(){
        if(count>10)
            resolve('Timer Completed Count: '+count)
        else
            reject(`Rejected ${count}`)
    },2000)
    for(let i=0;i<=10;i++){
        count++;
    }
})

my_promise
.then(function(resp){console.log(resp);})
.catch(function(err){console.log(err);})