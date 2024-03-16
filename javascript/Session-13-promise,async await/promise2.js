const myPromise= new Promise(function(resolve,reject){
    setTimeout(function(){resolve(1)},1000)
})

myPromise
    .then(function(resp){return resp*2}) // resolved 1 //1*2
    .then(function(resp){return resp*3}) //resolved 2 //2*3
    .then(function(resp){return resp*4}) //resolved 6 //6*4
    .then(function(resp){console.log(resp);}) //resolved and printed 24
    .catch(function(err){console.log(err);})