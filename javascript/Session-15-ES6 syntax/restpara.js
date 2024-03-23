//Rest Parameter
function uppercase(...data){
    console.log('----------Converting to UpperCase-------------------');
    for(let n of data){
        console.log(n.toUpperCase());
    }
}

uppercase('kundan','kiya','hello','test');
uppercase('asma','mansi','shashi','sonam','krizel','alex')