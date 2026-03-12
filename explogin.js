const express=require("express");
const app=express();
app.use(express.urlencoded({extended:false}));
app.get('/loginpage',(req,res)=>{
    res.send(`
        <form method="POST" action="/result">
            Username: <input type="text" name="t1" required/>
            Password: <input type="text" name="t2" required/>
            <button type="submit">login </button>
        </form>   
        `);
})

app.post('/result',(req,res)=>{
    const {t1,t2}=req.body;
    if(t1=="abcd" && t2=="1234"){
        res.send("yes bro correct username");
    }
    else{
        app.get('/addpage');
        res.send("not the right username or password");
    }
})

var server=app.listen(8094,function(){
    var host="127.0.0.1";
    var port=server.address().port;
    console.log("%s %s",host,port);
})