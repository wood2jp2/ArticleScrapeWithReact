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

// app.use(express.static('./app/public'));

mongoose.connect(localServer, {
  useMongoClient: true
});

db.on('error', err => {
  console.log('Database Error:', err)
});

db.once('open', () => {
  console.log('Mongoose connection successful')
});

app.get('/', (req, res) => {
  res.send('YOLO')
});

app.get('/scrape', (req, res) => {
  request('https://medium.com/topic/technology', (err, res, html) => {

    const $ = cheerio.load(html);

    $('div.u-flexColumnTop').each(function(i, element) {
      var result = {};

      result.title = $(this).find('h3').text();
      result.url = $(this).children('a').attr('href');
      result.time = $(this).parent().siblings('div.u-flex').find('time').attr('datetime');
      console.log(result);
      const entry = new Article(result);

      entry.save((err, doc) => {
        err ? console.log(err) : console.log(doc)
      });

    });
  });
  res.send('scrape complete')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});
