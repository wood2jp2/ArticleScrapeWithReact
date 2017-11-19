const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  comment: [{
    type: String,
    required: false
  }],
  saved: {
    type: Boolean,
    default: false
  },
  savedDate: {
    type: String,
    default: ''
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
