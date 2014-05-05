var serveStatic = require('serve-static');
var connect = require('connect');
module.exports = function(root) {
    return connect().use(serveStatic(root));
};
