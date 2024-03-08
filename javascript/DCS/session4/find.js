function search(array,num){
    const res=array.find(function(value){return value==num});
    //find function check the match element if matching found it will return first match
    //if no match then it will give you undefined
    if(res){
        console.log(`${res} Found`);
    }else{
        console.log(`${num} Not found`);
    }
}

search([1,2,3,4,5,6,7,8,9,10], 2);
search([12,34,56,78,9,11], 20);
search([3,6,9,10,23,56,43,87,12],12);