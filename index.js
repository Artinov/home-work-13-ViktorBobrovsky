var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {

  	var enteredData = request.url.split(""); 
	var a = enteredData[1];
	var b = enteredData[3];
	var result;   

if ( enteredData[0] == "/" && enteredData.length == 1 ){         
          response.end('Hello');
       
       } else if ( enteredData[2] == '+'){
                
                result = Number(a) + Number(b);
                result = String(result);
                response.end(result);  

       } else if ( enteredData[2] == '-'){

                result = Number(a) - Number(b);
                result = String(result);
                response.end(result);

       } else if ( enteredData[2] == '*'){

                result = Number(a) * Number(b);
                result = String(result);
                response.end(result);

       } else if ( enteredData[2] == '/'){

                result = Number(a) / Number(b);
                result = String(result);
                response.end(result); 
       }       
});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
})
