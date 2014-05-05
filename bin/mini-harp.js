#!/usr/bin/env node
var createMiniHarp = require("mini-harp");
var args = require('minimist')(process.argv.slice(2));
var path = args._[0] || process.cwd();
var app = createMiniHarp(path);
var port = args.port || 4000;
console.log('Starting mini-harp on http://localhost:' + port);
app.use(function(req, res, next) {
    if(req.url == '/current-time') {
        res.end(new Date().toISOString() + '\n');
    } else {
        next();
    }
});
app.listen(port);
