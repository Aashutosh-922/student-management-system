// const express=require('express');
// const mongoose=require('mongoose');
// // const mongoURI="mongodb+srv://aashutosh:psAlh0aujlEyrBkF@cluster0.5p6ko0c.mongodb.net/?retryWrites=true&w=majority" 
// //const app = express()
// //const port = 5001
// const dotenv =require('dotenv');
// const adminRoutes = require('./src/routes/admin'); // Import the adminRoutes module
// const studentRoutes = require('./src/routes/student'); // Import the studentRoutes module

// dotenv.config();

// const mongoURI = process.env.MONGO_URI || "default-mongodb-uri"; // Use a default URI if not provided in .env
// const port = process.env.PORT || 5001;

// const connectionParams={
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// }

// const app = express()
// app.use(express.json());




// mongoose.connect(mongoURI,connectionParams).then(()=>{
//     console.info("connected")
// })

// app.use('/admin', adminRoutes);
// app.use('/student', studentRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// });

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
import adminRoutes from './src/routes/admin'; // Update the import path
import studentRoutes from './src/routes/student'; // Update the import path



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
