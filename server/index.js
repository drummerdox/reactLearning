var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use( cors() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
    extended: true
}));

const todosDefault = [
  {
    id: 1,
    task: 'wash dishes',
    isCompleted: false,
    styleColor: 'isInCompleted',
  },
  {
    id: 3,
    task: 'clean teeth',
    isCompleted: false,
    styleColor: 'isInCompleted',
  }
];

app.get('/api/getTodos', (req, res) => {
  res.send({ todos: todosDefault });
});

app.post('/api/setTodos', (req, res) => {
    var todos = req.body.todos;

    console.log('Task list');

    todos.forEach(function(todo){
        console.log(todo.task + ' Status:' + todo.isCompleted)
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));