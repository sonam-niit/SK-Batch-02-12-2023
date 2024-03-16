async function checkAge(age){
    if(age>=18){
        return "valid";
    }else{
        return "not valid";
    }
}

console.log(checkAge(45));
console.log(checkAge(10));

checkAge(67)
.then(function(resp){console.log(resp);})
.catch(function(err){console.log(err);})