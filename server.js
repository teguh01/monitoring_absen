const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil routes
var routes = require('./routes');
routes(app);

// parse aplication/json
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});