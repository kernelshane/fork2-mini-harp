#!/usr/bin/env node
var createMiniHarp = require("../index.js");
var args = require('minimist')(process.argv.slice(2));
var app = createMiniHarp();
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
