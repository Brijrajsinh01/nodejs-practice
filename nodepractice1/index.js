var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = 3001;

//current date and time
var today= new Date().toLocaleString('en-GB', { timeZone: 'IST' });

//get request
app.get('/', (req, res) => {
    res.send(today)
  })

//post req
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/server', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('server', {qs: req.query} );
});

//APP LISTNING
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


// public edirecting
app.use(express.static('public'));
