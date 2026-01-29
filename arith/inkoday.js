import { createServer } from 'http';


createServer(
    function(req,res){
        res.writeHead(200,{'content-type':'text.html'});
        if(req.url=='/home'){
            res.write(`<p style="color:red; font-size:50px;">Hello bro!</p>`);
        }
        else if(req.url=='/date'){
            res.write(`<p style="color:blue; font-style:bold;">Date and time is ${new Date()}</p>`);
        }
    }
).listen(8090);
