var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send("Test");
})

app.listen(8080);


app.set('view engine', 'ejs');
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
