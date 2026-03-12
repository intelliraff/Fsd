const express=require("express");
const app=express();
app.use(express.urlencoded({extended:false}));
app.get('/addpage',(req,res)=>{
    res.send(`
        <form method="POST" action="/result">
            <input type="text" name="t1" required/>
            <input type="text" name="t2" required/>
            <button type="submit">ADD </button>
        </form>   
        `);
})

app.post('/result',(req,res)=>{
    const {t1,t2}=req.body;
    var n1=Number(t1);
    var n2=Number(t2);
    var ans=n1+n2;
    res.send('Addition: '+ans+"<a href='./addpage'>Go back bro</a>");
})

var server=app.listen(8094,function(){
    var host="127.0.0.1";
    var port=server.address().port;
    console.log("%s %s",host,port);
})