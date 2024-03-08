let data=[];

function fetchdata(cb){
    setTimeout(
        function(){
            data=[1,2,3,4,5,6,7,8,9,10];//assume data is coming form server
            console.log('Data Fetched Successfully');
            cb(); //display function called
        }, 3000
    )
}
function display(){
    console.log('My Data: ',data);
}
fetchdata(display);