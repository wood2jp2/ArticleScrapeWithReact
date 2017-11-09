const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  url: {
    type: String,
    required: true
  },
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
