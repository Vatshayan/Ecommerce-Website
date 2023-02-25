var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.set('views', path.join(__dirname, 'app-log/views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '../public'));

// index page
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },
        { name: 'Tux', organization: 'Linux', birth_year: 1996 },
        { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 },
    ];
    var tagline =
        'No programming concept is complete without a cute animal mascot.';

    res.render('/views/pages', {
        mascots: mascots,
        tagline: tagline,
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
