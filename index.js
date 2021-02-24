// allows us to use express in our app 
const express = require('express');
const app = express();

//can use handlebars 
const exphbs  = require('express-handlebars');

//set handlebars middleware
app.engine('handlebars', exphbs({
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'handlebars');


// set up handlebar routes 
// the forward slash = the route route (which is the home rn)

//home page route
app.get('/', function (req, res) {
    res.render("index");
});

//index route 
app.get('/index', function (req, res) {
    res.render("index");
});


//current session route 
app.get('/currentsession', function (req, res) {
    res.render('currentsession');
});


// set up path 
const path = require('path'); 


// defines what our port is going to be
// set up our environment 
const PORT = process.env.PORT || 3000; 

// tell app to listen on that port 
app.listen(PORT, () => console.log('Server listening on port ' + PORT))

// Set a static folder 
app.use(express.static(path.join(__dirname, 'public'))); 

// 
app.use(express.static(__dirname +"/public"));
