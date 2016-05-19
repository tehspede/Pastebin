var db = require('./db.js');

var Paste = db.model('Paste', { paste: String });

module.exports = Paste;
