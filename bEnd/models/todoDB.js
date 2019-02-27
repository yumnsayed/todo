var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;


function todo () {
    
 function connect (callback){
      MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, function (error, db) {
          
            if (error) {
                console.log(error);
                callback(error);
                return;
            }
             var todo = db.db("todo");
             var c = todo.collection('user');
              callback(null, c);
         });
                
 };
 
 
 this.search_User =function ( email , callback){
     connect (function (err , collection){
         if(err){
             console.log(err);
             callback(err);
             return;
         }
         try{
           
         collection.find({email:email}).toArray(function (err, result){
             if(err){
                 console.log(err);
                 callback(err);
                 return;
             }
             
             callback(null,result[0]); 
         });
     }catch(e){
         callback("error");
     }
     });
     
 };
  this.getUserList =function (data,callback){
      connect(function(err, collection){
         if(err){
             console.log(err);
             callback(err);
             return;
         }
         
             collection.updateOne({ email: data.email },{ $push: { list: data.item[0] } },null, function(err,reusult){
                 if(err){
                     console.log("here err");
                     callback(err);
                     return;
                 }
                  callback(null,reusult); 
             });
             
           
             
        
         
      });
         
     };
     
 
 
 // console.log("here");
   
    /*    this.add = function (data, callback) {
        
        MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, function (error, db) {
          
            if (error) {
                console.log(error);
                callback(error);
                return;
            }
            
            else{
                 
                var todo = db.db("todo");
                var c = todo.collection('user');
                c.insert({data}, function (err ,result){
                    if(err)
                    {
                        console.log(err);
                        callback(err);
                        return;
                    }
                    callback(null,result);
                     console.log("1 document inserted");   
                    
                });
                 
                         
            }

            
            });
        
    }; */
    };
        
 module.exports = todo;