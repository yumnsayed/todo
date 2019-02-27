$(function (){
    $("#tIN").hide();
    $("ul").hide();
    
    $("#login-form").submit(function (event) {
        $.ajax({
            url: "http://localhost:3000/users/login",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                email: $("#email").val(),
                password: $("#password").val()
            },
            
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                location.href = "todo.html"+"?"+data.email;
                console.log(data);
                console.log("++++++++++++++++=");
                console.log(data.name);
                $('#UN').html(data.email);
               //    var z =data;
          //     const data = data;
              
          //      $('#UN').html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Error");
            },
            complete: function (jqXHR, textStatus) {
            //
            }
            
              
        });
        event.preventDefault();
        // console.log(data);
    }); 
    
       var key= $("#email").val();
    //   $('#UN').html(key);
     //  console.log(key);
   var url_string = window.location.href ; //window.location.hre 
 var x=url_string.split("?");
 console.log(x[1]);
     
    $("#get").click(function (){
        $.ajax({
        url: "http://localhost:3000/users/todo", 
        data: {
            
             email :x[1]
         },
         xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
        
        type: 'POST',
        success: function (t, textStatus, jqXHR) {
            $("#tIN").show("fast");
            $("ul").show("fast");
            
           var render = t.list ;
           var btn=   "<button class=btn-danger>"+"Delete"+'</button>' ;
             var li = '<li>'+btn+'</li>';
           for (var i=0;i<render.length;i++){
              var li = '<li>'+render[i]+btn+'</li>';
               console.log(render[i]);
               if(render[i]!==null){
               $(li).appendTo('.todoList');
               
           }
           }
           $(".btn-danger").click(function()
            {
                var text =  $(this).parents("li").text().split("Delete")[0];
                 $(this).parents("li").hide();
                 $.ajax({
                     
                url: "http://localhost:3000/users/todo", 
                data: {

                     text :text
                 },
                 xhrFields: {
                withCredentials: true
                },
                crossDomain: true,

                type: 'POST',
                        success: function (data, textStatus, jqXHR) {
                            console.log(data);
                            
                        },error: function (jqXHR, textStatus, errorThrown) {
                            console.log(jqXHR.status);
                        },complete: function (jqXHR, textStatus) {
                            console.log(textStatus);
                        }
                         });
                
            });
           
                console.log(t);
         $('#toF').submit( function (event){
        event.preventDefault();
        var input = $('#tIN');
         var item = $('#tIN').val();
      //  console.log(item);
            
         $.ajax({
         url: "http://localhost:3000/users/todo",
         data: {
             item : input.val(),
             email :x[1]
         },
        xhrFields: {
        withCredentials: true
        },
        crossDomain: true,
        
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
          
         
        
        if( input.val() !== '')
        {
             var li = '<li>'+input.val()+btn+'</li>';
           $(li).appendTo('.todoList');
           input.val("");
         
        }
          
         
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.status);
        },
        complete: function (jqXHR, textStatus) {
     
           console.log(textStatus);
        }
       
    });
    
    });
                
               
                
                
                
                
                
                
                
           
        }
            
        });
    });
    
    
    
});