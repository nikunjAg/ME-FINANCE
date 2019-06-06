const express = require('express'),
    path      = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('home');
});

app.listen(PORT, ()=> console.log(`App is listening on PORT ${PORT}`));