// src/models/task.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  description: string;
  dueTime: Date;
  status: 'pending' | 'completed' | 'overdue';
  assignedTo: mongoose.Types.ObjectId;
}

const taskSchema = new Schema({
  description: { type: String, required: true },
  dueTime: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'completed', 'overdue'], default: 'pending' },
  assignedTo: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<ITask>('Task', taskSchema);
