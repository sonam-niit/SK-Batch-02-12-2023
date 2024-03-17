function checkAge(age){
    if(age<18){
        throw new Error('Not a Valid age')
    }
    console.log("Valid User can Vote..");
}

try {
    checkAge(12);
    checkAge(86);
} catch (error) {
    console.log(`Error Occured while cheking Age`);
    console.log(error.message);
}finally{
    console.log('Program Completed');
}