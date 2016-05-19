var app = require('./server/app.js');
var config = require('./config.json');

app.listen(config.port);
