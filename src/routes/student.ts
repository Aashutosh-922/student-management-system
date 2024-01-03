// src/routes/student.ts

// import express, { Request, Response } from 'express';
// import User from '../models/user';
// import Task from '../models/task';

// const router = express.Router();

// // Student login
// router.post('/login', async (req: Request, res: Response) => {
//   // Implement student login logic
// });

// // View assigned tasks
// router.get('/view-tasks', async (req: Request, res: Response) => {
//   // Implement viewing tasks logic
// });

// // Change task status to completed
// router.put('/complete-task/:taskId', async (req: Request, res: Response) => {
//   // Implement changing task status logic
// });

// export default router;

// src/routes/student.ts

import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';
import Task from '../models/task';

const router = express.Router();

// Student login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if the request body has email and password
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if the user exists
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Check if the password is correct
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Student login successful' });
});

// View assigned tasks
router.get('/view-tasks', async (req: Request, res: Response) => {
  const { userId } = req.body;

  // Validate request body
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Check if the user exists
  const userExists = await User.findById(userId);
  if (!userExists) {
    return res.status(400).json({ error: 'User does not exist' });
  }

  // Fetch tasks assigned to the user
  const tasks = await Task.find({ assignedTo: userId });
  res.json({ tasks });
});

// Change task status to completed
router.put('/complete-task/:taskId', async (req: Request, res: Response) => {
  const { taskId } = req.params;

  // Validate task ID
  if (!taskId) {
    return res.status(400).json({ error: 'Task ID is required' });
  }

  // Check if the task exists
  const task = await Task.findById(taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Update task status to completed
  task.status = 'completed';
  await task.save();

  res.json({ message: 'Task status updated to completed' });
});

export default router;
