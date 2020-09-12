var express = require('express');
var mustacheExpress = require('mustache-express');

var app = express();
app.set('port', 3000);
app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// ROUTINGE

app.get('/', function (req, res) {
    res.render('index');
});

// EUKAI LE START

app.listen(app.get('port'), function () {
    console.log('GGICS listening on port ' + app.get('port') + '!');
});