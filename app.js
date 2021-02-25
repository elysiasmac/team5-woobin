// allows us to use express in our app 
var express = require('express');
var app = express();

//can use handlebars 
var exphbs  = require('express-handlebars');

//set handlebars middleware
app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'handlebars');

//environment 
app.use(express.json());

// set up handlebar routes 
// the forward slash = the route route


//login route
app.get('/', function (req, res) {
    res.render("index");
});

//login route 
app.get('/index', function (req, res) {
    res.render("index");
});

// homepage
app.get('/homepage', function (req, res) {
    res.render("homepage");
});

//current session route 
app.get('/currentsession', function (req, res) {
    res.render('currentsession');
});

//past session selector route
app.get('/pastsession_selector', function (req, res) {
    res.render('pastsession_selector');
});

//past session overview route
app.get('/pastsession_overview', function (req, res) {
    res.render('pastsession_overview');
});

//past session details route
app.get('/pastsession_details', function (req, res) {
    res.render('pastsession_details');
});

//reflections route
app.get('/reflections', function (req, res) {
    res.render('reflections');
});

//sessionsummary route
app.get('/sessionsummary', function (req, res) {
    res.render('sessionsummary');
});

//insights route
app.get('/insights', function (req, res) {
    res.render('insights');
});

//see more route 
app.get('/seemore', function (req, res) {
    res.render('seemore');
});

// route to seemore.js 
var index = require('./routes/seemore');

// set up path 
var path = require('path'); 


// defines what our port is going to be
// set up our environment 
const PORT = process.env.PORT || 3000; 

// tell app to listen on that port 
app.listen(PORT, () => console.log('Server listening on port ' + PORT))

// Set a static folder 
app.use(express.static(path.join(__dirname, 'public'))); 

// 
app.use(express.static(__dirname +"/public"));

app.use(express.static(__dirname +"/routes"));

// all environments

app.set('views', path.join(__dirname, 'views'));


app.use(express.json());


