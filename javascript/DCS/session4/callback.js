function fn1() {
    console.log("Function 1 Executed");
}

function fn2(cb) {
    setTimeout(function () { console.log("Function 2 Executed");cb(); }, 3000)
}

function fn3() {
    console.log("Function 3 Executed");
}

fn1();
fn2(fn3); //pass fn3 to fun2 as parameter