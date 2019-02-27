var express = require('express');
var router = express.Router();
var todo = require('./../models/todoDB');
console.log("1");


/* console.log("3");
router.post('/todo', function (req, res)
{
    console.log("4");
    // var item= req.body;
      var it = req.body.item + " " +"Backend";
 //    const u = todo();
  console.log("5");
        
       var data= {item: req.body.item};
       console.log("6");
          var u = new  todo();
          console.log("7");
          u.add(data , function (err ,result)
          {
              console.log("8");
              if(err){
             //     console.log(err);
                  res.json({
                      error: "database",
                      errr: err
                  });
                  console.log("9");
                  return;
              
              }
              res.send(it); 
              console.log("10");
              console.log("suc");
              console.log(result);
             
              
          });
          console.log("11");
          
    }); */


    router.post('/login' ,function(req,res){
        var user ={
            email: req.body.email,
            password :req.body.password
        };
        
        console.log(user.email);
          var u = new  todo();
          u.search_User(user.email,function (err, result){
              if(err){
                  console.log("err");
                  return;
              }
              //console.log(result);
             // console.log(result.name);
              res.send(result);
          });
         
      
    });
    
    
    
    
    router.post('/todo', function(req, res, next) {
      var u = new  todo();
 
        var data= {email:req.body.email,
                   item:[ req.body.item]};
   
      
      u.getUserList(data , function (err,result){
          if(err){
              console.log(err);
              console.log("err");
              return;
          }
          //res.send(result);
   
      });
       u.search_User(data.email,function (err, result){
              if(err){
                  console.log("err");
                  return;
              }
            
              res.json(result);
          });
  
          var itemval = req.body.text ;
          console.log(itemval);
        });
     ;
  
     
module.exports = router;
