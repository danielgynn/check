'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String,
  complete: Boolean,
  deadline: Date,
  tag: String,
  Notes: String
});

module.exports = mongoose.model('Todo', TodoSchema);