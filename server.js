var express = require('express');

var PORT = 3000;

var app = express();
app.listen(PORT, console.log('Express server started at '+ PORT));

var middleWare = { // makes it easy to run specific functions
    requireAuthentication: function(request, request, next){//route level middleware
        console.log('Private route hit');
        next();
    },
    logger: function(request, response, next){
        console.log("Request: "+ request.method + " " + request.originalUrl + " on "+ Date().toString());
        next();
    }
};
app.use(middleWare.logger);

app.use(middleWare.requireAuthentication);
// app.get('/', function(request, response){
//     response.send('Hello express');
// });

app.get('/about', middleWare.requireAuthentication, function(request, response){ // adding route leve middleware
    response.send('This is About us page !');
});
app.use(express.static(__dirname + '/public'));
