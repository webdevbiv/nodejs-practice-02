import express from 'express';
import { Student } from './models/students.js';

const app = express();

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json({
    status: 200,
    message: 'Successfully retrieved students',
    data: students,
  });
});

app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        status: 404,
        message: `Student with ID ${req.params.id} not found`,
      });
    }

    res.json({
      status: 200,
      message: `Successfully retrieved student with ID ${req.params.id} name ${student.name}`,
      data: student,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: `Invalid ID format`,
    });
  }
});

export default app;
