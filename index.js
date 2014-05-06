var serveStatic = require('serve-static');
var connect = require('connect');
var makeJade = require('./lib/processor/jade.js');
module.exports = function(root) {
    var jade = makeJade(root);
    //return connect().use(jade).use(serveStatic(root));
    return connect().use(serveStatic(root)).use(jade);
};
