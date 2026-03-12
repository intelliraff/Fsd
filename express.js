const ex=require('express');
var app=ex();
app.get('/',function(req,res){
    res.set('content-type','text/html');
    res.send('<h1>hello bro</h1>');
})

var server=app.listen(8093,function(){
    var host=server.address().address;
    var post=server.address().port;
    console.log("%s %s",host,post);
})