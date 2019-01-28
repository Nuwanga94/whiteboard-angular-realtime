
const connection = require('./../db-con');
var uuid = require('uuid');




exports.edit = function signup(req, res){
  
    message = '';
    if(req.method == "POST"){
        var post  = req.body;
        id=post.id;
        type=post.type;


console.log(id,type);
        if(type==`admin`){
            var sql = "DELETE FROM `admin`  WHERE `aId`= '" + id + "'"
        }else if(type==`student`){
            var sql = "DELETE FROM `student`  WHERE `sId`= '" + id + "'"
        }else if(type==`teacher`){ 
            var sql = "DELETE FROM `teacher` WHERE `tId`= '" + id + "'"
        }
     
                                                                                    
       var query = connection.query(sql, function(err, result) {
            if (err){
             
                console.log("not found user");
                res.status(404);
                //res.json(aId);
                //res.send(JSON.stringify({ a: 1 }));
    }
    else{
        res.status(200);
       // res.json(aId);
    }
            
 });
 
    } else {
       console.log("method not allowed")
    }
 }


