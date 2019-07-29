var express= require('express');
var app = express();
var mysql = require('mysql')
var path = require('path')


app.use(express.json());
app.use(express.urlencoded({extended:true}))

// var con = mysql.createConnection(
//     {
//         host:"localhost",
//         user : "root",
//         password : "",
//         database:"harsha",
//     }
// ) 
// con.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("database connected")
//     }
// })
//static folder
app.use(express.static(path.join(__dirname,'public')))



//middlewear
// const logger = (req,res,next)=>{
//     console.log(req)
//     console.log(res)
//     next();
// }

// app.use(logger)



app.use("/apimembers",require('./Api/Members'))
// app.use((req,res,next)=>{
//     console.log("a new request");
//     next();
// })
// app.get("/",(req,res)=>{
//     var sql= "select * from student";
//     con.query(sql,(err,data)=>{
//         if(err) throw err;
//         else{
//             var data1={
//                 result : data
//             }
         
//             res.json(data1)


//         }
//     })
// })



// app.post("/post",(req,res)=>{
//     var x ={
//             "F_name": req.body.F_name,
//             "L_name": req.body.L_name,
//             "age": req.body.age,
//             "Country": req.body.Country     
//     }
//     var sql = "insert into student set ?"
//     con.query(sql,x,(err,data)=>{
//         if(err) throw err;
//         else{
//             let result  = {
//                 message : "inserted successfullt",
//                 data : data
//             }
//             res.send(result)
       
//         }
//     })
// })


// app.get("/:id/:name",(req,res)=>{
//     res.send( "id passed is " + req.params.id)
//     console.log("inside get")
// })




app.listen(8000);