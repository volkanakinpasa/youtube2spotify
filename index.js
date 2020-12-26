var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var compression = require('compression');
// require('dotenv').config();
var path = require('path');

var app = express();
app.use(compression());

app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

app.use(cors());
app.disable('x-powered-by');
app.use('/css', express.static('css'));
app.use('/fonts', express.static('fonts'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/style.css', express.static('style.css'));
app.use('/html', express.static('html'));

var PORT = 8080;

app.get(['/', '/home/installed', '/home/contact'], function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT);
console.log('server is running on port ' + PORT);
