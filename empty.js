var connect = require('connect');

var app = connect();
for(var name in connect) {
    console.log(name, connect[name]);
}
console.log('Starting http server on http://localhost:4000');
app.listen(4000);
