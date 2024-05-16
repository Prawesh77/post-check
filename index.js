const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/elec_product_list'; // Replace with your connection string
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));


// Import the router  
const productRoutes = require('./routes/productRoute');
const loginRoutes = require('./routes/loginRoute');
const registerRoutes = require('./routes/registerRoute');
const protectedRoutes = require('./routes/protectedRoute');
// const userRoutes = require('./routes/userRoute');


// ... (Your API routes and other backend logic)
app.use('/products', productRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/protected', protectedRoutes);
// app.use('/users', userRoutes);


//to check
// app.get('/users', (req, res) => {
//     res.send('Hello from your Node.js server!');
//   });

app.listen(port, () => console.log(`Server listening on port ${port}`));