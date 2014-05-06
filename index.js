var serveStatic = require('serve-static');
var connect = require('connect');
var makeJade = require('./lib/processor/jade.js');
var makeLess = require('./lib/processor/less.js');
var path = require('path');
module.exports = function(root) {
    var jade = makeJade(root);
    var less = makeLess(root);
    return connect()
        .use(function(req, res, next) {
            if (req.url == "/") {
                req.url = "/index.html";
            }
            next();
        })
        .use(function(req, res, next) {
            extname = path.extname(req.url);
            if (extname == '.less' || extname == '.jade') {
                res.statusCode = 404;
                res.end();
            }
            else {
                next();
            }
        })
        .use(serveStatic(root))
        .use(jade)
        .use(less)
        
};
