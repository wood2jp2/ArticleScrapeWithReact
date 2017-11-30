const
  express = require('express'),
  mongoose = require('mongoose'),
  cheerio = require('cheerio'),
  Article = require('./models/Article.js'),
  bodyParser = require('body-parser'),
  request = require('request'),
  port = process.env.PORT || 5000,
  app = express(),
  localServer = "mongodb://localhost:27017/NYTreact10",
  MONGODB_URI = 'mongodb://heroku_c23skv0q:a42ggrjgd6fejisvgf66sd10cm@ds147304.mlab.com:47304/heroku_c23skv0q',
  db = mongoose.connection;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// app.use(express.static('./app/public'));

mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

db.on('error', err => {
  console.log('Database Error:', err)
});

db.once('open', () => {
  console.log('Mongoose connection successful')
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/app/public/index.html");
});

app.get('/api/saved', (req, res) => {
  Article.find({
    'saved': true
  }, (err, articles) => {
    res.send(articles)
  })
});

app.get('/api/articles/:id', (req, res) => {
  Article.find({
    '_id': req.params.id
  }, (err, article) => {
    res.send(article)
  });
})

app.post('/api/articles/:id', (req, res) => {
  Article.update({
    '_id': req.params.id
  }, {
    $push: {comment: req.body.comment}
  }, (err, comment) => {
    err ? console.log(err) : console.log('Comment successfully added')
  })
})

app.delete('/api/articles/:id', (req, res) => {
  Article.find({
    '_id': req.params.id
  })
  .remove()
  .exec();
  res.send('deleted')
});

app.get('/scrape', (req, res) => {
  Article.find({}).remove().exec();
  request('https://www.nytimes.com/section/technology', (err, resp, html) => {
    const $ = cheerio.load(html);

    $('article.story').each(function(i, element) {

      var result = {};

      result.title = $(this).find('h2').text().trim();
      result.url = $(this).find('a').attr('href');
      let date = $(this).find('time').attr('datetime');
      let convertToString = String(date).charAt(0);

      if (convertToString === '1') {
        let convertToSeconds = date * 1000;
        let letsTryThis = new Date(convertToSeconds);
        let cut = letsTryThis.toString().slice(4,15);
        result.date = cut;
      } else {
        let last = new Date(date);
        let cut = last.toString().slice(4,15);
        result.date = cut;
      };

      const entry = new Article(result);
      entry.save((err, doc) => {
        if (err) {
          console.log(err)
        }
      });
    });
    res.send('something')
  });
});

app.put('/api/articles/:id', (req, res) => {
  console.log(req.body);
  if (req.body.saved) {
    let date = new Date();
    Article.findOneAndUpdate({
      '_id': req.params.id
    }, {
      'saved': req.body.saved,
      'savedDate': date
    }, (err, articles) => {
      res.send(articles)
    });
  } else {
    Article.update({
      '_id': req.params.id
    }, {
      $pull: {'comment': req.body.body}
    }, (err, articles) => {
      res.send(articles)
    })
  }

});

app.get('/api/articles', (req, res) => {
  if (req.query.saved) {
    Article.find({
      'saved': req.query.saved
    }, (err, articles) => {
      res.send(articles)
    })
  } else if (!req.query.topic){
    Article.find({}, (err, articles) => {
      res.send(articles)
    })
  } else if (req.query.topic) {
   Article.find({
      'title': { '$regex': req.query.topic, "$options": "i" },
      'saved': req.query.savedSearch
    }, (err, articles) => {
      res.send(articles)
    });
  }
});

app.get("*", function(req, res) {
  if ( process.env.NODE_ENV === 'production' ) {
    res.sendFile(__dirname + "/app/public/index.html");
  } else {
    res.sendFile(__dirname + "/app/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});
