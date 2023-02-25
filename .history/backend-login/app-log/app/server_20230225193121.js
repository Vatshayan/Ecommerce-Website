var express = require('express');
var app = express();
const path = require('path');


// Connect to DB


// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.set('views', path.join(__dirname, 'app'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '../public'));

app.use(express.static(__dirname + 'app'));

app.get('routes/index', function(req, res) {
    res.render('about');
});

// about page
app.get('/index', function(req, res) {
    res.render('index');
});

app.listen(8000);
console.log('Server is listening on port 8000');
