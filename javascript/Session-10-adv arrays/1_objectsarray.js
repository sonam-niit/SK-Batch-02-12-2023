const students=[
    {
        id:101,
        name:'Alex',
        cgpa:7.9
    },
    {
        id:103,
        name:'Bob',
        cgpa:7.0
    },
    {
        id:104,
        name:'Catherine',
        cgpa:5.6
    },
    {
        id:109,
        name:'Devid',
        cgpa:9.0
    },
    {
        id:201,
        name:'John Doe',
        cgpa:8.6
    }
]

for(let student of students){
    console.log("-----------------------------------");
    for(let key in student){
        console.log(key+": "+ student[key]);
    }
}