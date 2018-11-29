var express = require('./node_modules/express');
var app = express();
app.use(express.static('www'));

app.listen('3001');
console.log('working on 3001');
