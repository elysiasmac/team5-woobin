//get app_names data

var data = require("../data.json");

exports.view = function (request, response) {
  console.log(data);
  response.render('sessionsummary', data);
};


