// src/routes/admin.ts

// import express, { Request, Response } from 'express';
// import User from '../models/user';
// import Task from '../models/task';

// const router = express.Router();

// // Admin login
// router.post('/login', async (req: Request, res: Response) => {
//   // Implement admin login logic
// });

// // Add student
// router.post('/add-student', async (req: Request, res: Response) => {
//   // Implement adding student logic
// });

// // Assign task to student
// router.post('/assign-task', async (req: Request, res: Response) => {
//   // Implement assigning task logic
// });

// // View tasks assigned to students
// router.get('/view-tasks', async (req: Request, res: Response) => {
//   // Implement viewing tasks logic
// });

// export default router;

// src/routes/admin.ts

import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import Task from '../models/task';

const router = express.Router();

// Admin login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if the request body has email and password
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if the user is admin
  if (email !== 'admin@admin.com' || password !== 'admin') {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Admin login successful' });
});

// Add student
router.post('/add-student', async (req: Request, res: Response) => {
  const { name, email, department, password } = req.body;

  // Validate request body
  if (!name || !email || !department || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'Email is already registered' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    name,
    email,
    department,
    password: hashedPassword,
  });

  await newUser.save();
  res.json({ message: 'Student added successfully' });
});

// Assign task to student
router.post('/assign-task', async (req: Request, res: Response) => {
  const { description, dueTime, assignedTo } = req.body;

  // Validate request body
  if (!description || !dueTime || !assignedTo) {
    return res.status(400).json({ error: 'Description, due time, and assignedTo are required' });
  }

  // Check if the assignedTo user exists
  const userExists = await User.findById(assignedTo);
  if (!userExists) {
    return res.status(400).json({ error: 'Assigned user does not exist' });
  }

  // Create a new task
  const newTask = new Task({
    description,
    dueTime,
    assignedTo,
  });

  await newTask.save();
  res.json({ message: 'Task assigned successfully' });
});

// View tasks assigned to students
router.get('/view-tasks', async (req: Request, res: Response) => {
  const tasks = await Task.find().populate('assignedTo', 'name email');
  res.json({ tasks });
});

export default router;
