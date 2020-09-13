var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes/index');
var bodyParser = require('body-parser');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middelwares
app.use((req, res, next) =>{
    console.log(`${req.url} - ${req.method}`);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(routes);

//static fields
app.use(express.static(path.join(__dirname,'public')));

//
app.set('views', path.join(__dirname,'views'));
app.listen(app.get('port'),()=>{
    console.log('server on port ', app.get('port') );
})
