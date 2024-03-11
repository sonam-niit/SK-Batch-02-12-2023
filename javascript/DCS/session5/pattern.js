function createStarPattern(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        for(let j=1;j<=rows;j++){
            if((i+j)%2==0){
                pattern+='* '
            }else{
                pattern+='  '
            }
        }
        pattern+='\n'
    }
    console.log(pattern);
}
createStarPattern(5);