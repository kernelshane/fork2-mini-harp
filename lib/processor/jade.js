module.exports = makeJade;
var jade = require('jade');
var path = require('path');
var fs = require('fs');

function makeJade(root) {
    root = root || process.cwd();
    return function(req, res, next) {
        var extname = path.extname(req.url);
        console.log(root);
        if (extname == '.html') {
            var jadeFile = root + "/" + path.basename(req.url, '.html') + '.jade';

            fs.readFile(jadeFile, {
                encoding: "utf8"
            }, function(err, data) {
                if (err) {
                    res.statusCode = 404;
                    res.end();
                }
                else {
                    jade.render(data, function(err, html) {
                        if (err) throw err;
                        res.writeHead(200, {
                            'Content-Length': html.length,
                            'Content-Type': 'text/html; charset=UTF-8'
                        });
                        res.end(html);
                    });
                }
            });
        }
        else {
            next();
        }
    };
}
