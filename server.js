var express = require('express');

var middleWare = require('./middleware.js');

var PORT = process.env.PORT || 3000;

var app = express();
app.listen(PORT, console.log('Express server started at '+ PORT));

app.use(middleWare.logger);

app.use(middleWare.requireAuthentication);
// app.get('/', function(request, response){
//     response.send('Hello express');
// });

app.get('/about', middleWare.requireAuthentication, function(request, response){ // adding route leve middleware
    response.send('This is About us page !');
});
app.use(express.static(__dirname + '/public'));
