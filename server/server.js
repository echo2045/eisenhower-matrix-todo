const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'eisenhower_matrix_db',
  password: '1234',
  port: 5432,
});

// Get all active tasks
app.get('/tasks', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks WHERE done = false ORDER BY deadline ASC');
  res.json(result.rows);
});

// Get completed tasks
app.get('/tasks/completed', async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks WHERE done = true ORDER BY completed_at DESC');
  res.json(result.rows);
});

// Add a new task
app.post('/tasks', async (req, res) => {
  const { task, deadline, isImportant, isUrgent } = req.body;
  await pool.query(
    'INSERT INTO tasks (task, deadline, is_important, is_urgent) VALUES ($1, $2, $3, $4)',
    [task, deadline, isImportant, isUrgent]
  );
  res.json({ message: 'Task added successfully' });
});

// Mark task as done
app.put('/tasks/:id/done', async (req, res) => {
  const { id } = req.params;
  await pool.query(
    'UPDATE tasks SET done = true, completed_at = CURRENT_TIMESTAMP WHERE id = $1',
    [id]
  );
  res.json({ message: 'Task marked as done' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
