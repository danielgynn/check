'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var Todo = require('./models/todo');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://danielgynn:secret@ds163721.mlab.com:63721/check');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API is running!'});
});

router.route('/todos')
  .get(function(req, res) {
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err);
      } else {
        res.json(todos);
      }
    });
  })

  .post(function(req, res) {
    var todo = new Todo();
    todo.text = req.body.text;
    todo.complete = false;
    todo.created_at = new Date();

    todo.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Todo successfully added!'});
      }
    });
  });

router.route('/todos/:todo_id')
  .delete(function(req, res) {
    Todo.remove({ _id: req.params.todo_id}, function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Todo has been deleted' });
      }
    })
  });

router.route('/todosNotes/:todo_id')
  .put(function(req, res) {
    Todo.findById(req.params.todo_id, function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        todo.notes = req.body.notes;

        todo.save(function(err) {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Todo has been updated!' });
          }
        });
      }
    });
  });

router.route('/todosDeadline/:todo_id')
  .put(function(req, res) {
    Todo.findById(req.params.todo_id, function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        todo.deadline = req.body.deadline;

        todo.save(function(err) {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Todo has been updated!' });
          }
        });
      }
    });
  });

router.route('/todosCheck/:todo_id')
  .put(function(req, res) {
    Todo.findById(req.params.todo_id, function(err, todo) {
      if (err) {
        res.send(err);
      } else {
        (req.body.complete) ? todo.complete = false : todo.complete = true;

        todo.save(function(err) {
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Todo has been updated!' });
          }
        });
      }
    });
  });

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
