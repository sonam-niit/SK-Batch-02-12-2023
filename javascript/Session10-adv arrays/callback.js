function add(n1, n2, print) {
    const res = n1 + n2;
    print(res); //actually it is calling xyz
}


add(4, 5, xyz)

function xyz(para) {
    console.log(para);
    console.log("hello world");
}