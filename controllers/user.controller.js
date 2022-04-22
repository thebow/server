var db = require("../database-mysql");

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/**
 * Fradj : User/getAll
 */


var selectAll = function (req, res) {
  db.query("SELECT * FROM users", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};


// function remove one user

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//khairi: user/signUp
var signUp= (req,res)=>{
    console.log(req.body);
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    const role=req.body.role
    const sql=`SELECT * FROM users WHERE email=? `
    db.query(sql,email,(err,result)=>{
        console.log(result);
        if(err){
            res.send(err)
        }
        if(result.length>0){
            res.send("user already exist")
        }else{
            //`id`, `role`, `name`, `password`, `email`
            db.query("INSERT INTO users ( role, name, password, email) VALUES (?,?,?,?)",[ role, name, password, email],(err,result)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send(['yes',result])
                }
            })
        }
    })
    }

    //khairi: user/signIn
    var signIn=(req,res)=>{
        const email=req.body.email
    const password=req.body.password
    const sqlSel=`SELECT * FROM users WHERE  email=? AND password=? `
    db.query(sqlSel,[email,password],(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result.length>0){
            res.send(["succesfully connected",result])
        }else{
            res.send("Login faild")
        }
    })
    }

module.exports = { 
selectAll,
signUp,
signIn
};


//hello Youssef
