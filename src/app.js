import express from 'express';
const app = express();

app.get('/students', (req, res) => {
  res.json({
    status: 200,
    message: 'Successfully retrieved students',
    data: [],
  });
});

app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  res.json({
    status: 200,
    message: `Successfully retrieved student with ID ${studentId}`,
    data: {},
  });
});

export default app;
