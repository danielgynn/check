'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String,
  complete: Boolean,
  deadline: Date,
  tag: String,
  notes: String,
  created_at: Date
});

module.exports = mongoose.model('Todo', TodoSchema);
