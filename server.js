const
  express = require('express'),
  mongoose = require('mongoose'),
  cheerio = require('cheerio'),
  Article = require('./models/Article.js'),
  bodyParser = require('body-parser'),
  request = require('request'),
  port = process.env.PORT || 5000,
  app = express(),
  localServer = "mongodb://localhost:27017/mediumreact",
  db = mongoose.connection;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('./app/public'));

mongoose.connect(localServer, {
  useMongoClient: true
});

db.on('error', function(err) {
  console.log('Database Error:', err)
});

db.once('open', () => {
  console.log('Mongoose connection successful')
});

app.get('/', (req, res) => {
  res.send('YOLO')
});
