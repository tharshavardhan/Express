const express = require('express')
const router = express.Router()
const Members = require('../Members')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')


var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "harsha",
    }
)
con.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("database connected")
    }
})
router.get("", (req, res) => {
    console.log("inside 1")
    const sql = "select * from student";
    con.query(sql, (err, data) => {
        if (err)
            throw error;
        else {
            res.json(data)
        }

    })


})

// router.get("/:id",(req,res)=>{
//     console.log("inside 2")
//     if(parseInt(req.params.id) === 2)
//     {
//         return res.status(400).json({message:"not found"})
//     }
//     res.json(Members)
// })
router.post("/jwtpost",verifyToken, (req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authdata)=>{
        if(err) {
            res.sendStatus(403)
        }
        else
        {
            res.json({message :"post created",authdata}
            )
        }
    })
})

router.post("/jwtget", (req, res) => {
    //mock user
    const user = {
        id: 1,
        name: "harsha",
        password: "harsha"
    }

    jwt.sign({ user }, 'secretkey', (err, token) => {
        if (err) throw err
        else {
            res.send({
                token
            })
        }
    })

})

//verifyToken

function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //check bearer is undefiner;
    
    if (typeof bearerHeader != 'undefined') {

        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();

    } else {
        res.sendStatus(403);
    }
    
}


module.exports = router;