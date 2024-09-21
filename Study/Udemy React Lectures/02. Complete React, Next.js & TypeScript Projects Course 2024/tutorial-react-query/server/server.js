import express from 'express';
import cors from 'cors';
import { nanoid } from 'nanoid';
import morgan from 'morgan';

const app = express();

let taskList = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// GET
app.get('/', (req, res) => {
  res.send('<h1>Hello From Server...</h1>');
});

// GET
app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});

// POST
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ msg: 'please provide title' });
    return;
  }
  const newTask = { id: nanoid(), title, isDone: false };
  taskList = [...taskList, newTask];
  res.json({ task: newTask });
});

// PATCH
app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;

  taskList = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, isDone };
    }
    return task;
  });

  res.json({ msg: 'task updated' });
});

// DELETE
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);

  res.json({ msg: 'task removed' });
});

app.use((req, res) => res.status(404).send('Route does not exist'));

// 포트 설정
const port = process.env.PORT || 5001;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
