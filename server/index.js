var express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())

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
]

app.get('/api/getTodos', (req, res) => {
  res.send({ todos: todosDefault });
});

app.post('/api/setTodos', (req, res) => {
  console.log(req);
  console.log('we here /api/setTodos');
  //res.send({ todos: todosDefault });
});

app.listen(port, () => console.log(`Listening on port ${port}`));