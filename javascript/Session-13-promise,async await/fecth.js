const promise=fetch('https://jsonplaceholder.typicode.com/users/1');

promise
    .then(function(resp){return resp.json()})
    .then(function(resp){console.log(resp)})
    .catch(function(err){console.log(err)})