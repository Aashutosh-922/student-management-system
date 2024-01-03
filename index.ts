// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import adminRoutes from './src/routes/admin'; // Update the import path
// import studentRoutes from './src/routes/student'; // Update the import path

// dotenv.config();

// const mongoURI: string = process.env.MONGO_URI || 'default-mongodb-uri';
// const port: number = parseInt(process.env.PORT as string, 10) || 5001;



// const connectionParams: mongoose.ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };


// const app = express();

// app.use(express.json());

// mongoose.connect(mongoURI, connectionParams).then(() => {
//   console.info('Connected to MongoDB');
// });

// app.use('/admin', adminRoutes);
// app.use('/student', studentRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
import adminRoutes from './src/routes/admin'; // Correct the import path
import studentRoutes from './src/routes/student'; // Correct the import path

dotenv.config();

const mongoURI = process.env.MONGO_URI || "default-mongodb-uri";
const port = process.env.PORT || 5001;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const app = express();

app.use(express.json());

mongoose.connect(mongoURI, connectionParams).then(() => {
  console.info("connected");
});

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
