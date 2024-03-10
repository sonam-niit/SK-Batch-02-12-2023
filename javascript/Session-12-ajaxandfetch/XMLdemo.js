let req= new XMLHttpRequest();
req.open('GET','https://jsonplaceholder.typicode.com/users/1');

//write one call back to handle response coming from server
req.onload=function(){
    if(req.status==200){
        let details=req.responseText;
        console.log(details);
        const object= JSON.parse(details)
        document.getElementById('userInfo').innerHTML=`
        <h1>Name:${object.name} </h1>
        <h2>User Name:${object.username} </h2>
    `
    }else{
        console.log(`Request failed with status`,req.status);
    }
}
//a callback fro error while working with xhr
req.onerror=function(){
    console.log(`Request Failed`);
}

req.send();
