var Paste = require('../models/paste.js');

function getPaste(req, res) {
  Paste.findOne({ _id: req.params.pasteId }, function (err, result) {
    res.send(result);
  });
};

function getRawPaste(req, res) {
  Paste.findOne({ _id: req.params.pasteId }, function (err, result) {
    res.set('Content-Type', 'text/plain');
    res.send(result.paste);
  });
};

function savePaste(req, res) {
  var paste = new Paste({ paste: req.body[0].value });
  paste.save();
  res.send(JSON.stringify(paste));
}

module.exports.get = getPaste;
module.exports.getRaw = getRawPaste;
module.exports.save = savePaste;
