
const connection = require('./../db-con');
var uuid = require('uuid');




exports.edit = function signup(req, res){
  
    message = '';
    if(req.method == "PUT"){
       var post  = req.body;
 

      FirstName=post.fName;
      MidName=post.mName;
      LastName=post.lName;
      EmailId=post.email;
      No=post.addr1;
      Street=post.addr2;
      City=post.addr3;
      ContactNo=post.phone;
      id=post.id;
      Password=post.pw
console.log(id);

        var sql = "UPDATE `admin` SET `fName`='" + FirstName + "' ,`mName`='" + MidName + "' ,`lName`= '" + LastName + "',`email`='" + EmailId + "' ,`pw`='" + Password + "' , `addr1`= '" + No + "',`addr2`= '" + Street + "',`addr3`='" + City + "' ,`phone`= '" + ContactNo + "'  WHERE `aId`= '" + id + "'"
                                                                                    
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


 exports.editth = function signup(req, res){
  
    message = '';
    if(req.method == "PUT"){
       var post  = req.body;
 

      FirstName=post.fName;
      MidName=post.mName;
      LastName=post.lName;
      EmailId=post.email;
      No=post.addr1;
      Street=post.addr2;
      City=post.addr3;
      ContactNo=post.phone;
      id=post.id;
      Password=post.pw


        var sql = "UPDATE `teacher` SET `fName`='" + FirstName + "' ,`mName`='" + MidName + "' ,`lName`= '" + LastName + "',`email`='" + EmailId + "' ,`pw`='" + Password + "' , `addr1`= '" + No + "',`addr2`= '" + Street + "',`addr3`='" + City + "' ,`phone`= '" + ContactNo + "'  WHERE `tId`= '" + id + "'"
                                                                                    
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




 exports.editst = function signup(req, res){
  
    message = '';
    if(req.method == "PUT"){
       var post  = req.body;
 

      FirstName=post.fName;
      MidName=post.mName;
      LastName=post.lName;
      EmailId=post.email;
      No=post.addr1;
      Street=post.addr2;
      City=post.addr3;
      ContactNo=post.phone;
      id=post.id;
      Password=post.pw


        var sql = "UPDATE `student` SET `fName`='" + FirstName + "' ,`mName`='" + MidName + "' ,`lName`= '" + LastName + "',`email`='" + EmailId + "' ,`pw`='" + Password + "' , `addr1`= '" + No + "',`addr2`= '" + Street + "',`addr3`='" + City + "' ,`phone`= '" + ContactNo + "'  WHERE `sId`= '" + id + "'"
                                                                                    
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