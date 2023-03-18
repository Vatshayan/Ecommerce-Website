var express = require('express');
var app = express();
const path = require('path');


// Connect to DB


// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.set('views', path.join(__dirname, 'app-log/app/views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '../public'));


aop.post('/backend-login/app-log/views', (req, res) => {
    res.render('views');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
