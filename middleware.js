
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

module.exports = middleWare;