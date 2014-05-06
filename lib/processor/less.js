module.exports = makeLess;
var less = require('less');
var path = require('path');
var fs = require('fs');

function makeLess(root) {
    root = root || process.cwd();
    return function(req, res, next) {
        var extname = path.extname(req.url);
        if (extname == '.css') {
            var lessFile = root + '/' + path.basename(req.url, '.css') + '.less';
            fs.readFile(lessFile, {encoding: "utf8"}, function(err, data) {
                if(err) {
                    res.statusCode = 404;
                    res.end();
                }
                else {
                    less.render(data, function(err, css){
                        res.statusCode = 200;
                        res.end(css);
                    });
                }
            });
        }
        else {
            next();
        }
    };
}
