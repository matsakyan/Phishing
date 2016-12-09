const path = require('path');
const smsgetway = require('../middleware/smsgetway');

module.exports.get = function(req, res) {
  res.sendFile(path.join(__dirname, '../views/ok.html'));
}

module.exports.post = function(req, res) {

  let text = JSON.stringify(req.body);

  smsgetway.send(text);

  res.end();
}