var express = require('express');
var router = express.Router();
var controllers = require('./controllers/controllers.js');
var Paste = require('./models/paste.js');

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/../client/index.html');
});

router.get('/paste/:pasteId/', function (req, res) {
  controllers.paste.get(req, res);
});

router.post('/paste/', function (req, res) {
  controllers.paste.save(req, res);
});

module.exports = router;
