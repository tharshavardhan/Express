var res = require('express')
var app = res();

app.get("/",(req,res)=>{
    res.send("haii2")
})


app.listen(8000);