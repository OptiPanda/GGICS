import express from "express";
import mustacheExpress from "mustache-express";
import router from "./routes/index";

const app = express();
app.set('port', 3000);
app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// ROUTINGE

app.use('/', router);

// EUKAI LE START

app.listen(app.get('port'), function () {
    console.log('GGICS listening on port ' + app.get('port') + '!');
});
