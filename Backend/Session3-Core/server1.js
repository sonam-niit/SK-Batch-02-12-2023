const http = require('http');

http.createServer((req, res) => {
    let response=""
    if(req.url=='/about'){
        response="About Us";
    }
    else if(req.url=='/contact'){
        response="Contact Us Page";
    }
    else if(req.url=='/news'){
        response="News Page";
    }
    else{
        response="Home Page";
    }
    res.end(response);
}).listen(5000, () => console.log('Server started'))