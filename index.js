var serveStatic = require('serve-static');
var connect = require('connect');
var makeJade = require('./lib/processor/jade.js');
module.exports = function(root) {
    var jade = makeJade(root);
    return connect()
        .use(function(req, res, next) {
            if (req.url == "/") {
                req.url = "/index.html";
            }
            next();
        })
        .use(serveStatic(root))
        .use(jade)
        
};
