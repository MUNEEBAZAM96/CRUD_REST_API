import mongoose from 'mongoose';
import express from 'express';


import productRoute from './Route/product.route.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies


// routes 
app.use("/api/products", productRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://muneebazam96_db_user:4wH3qtKRWjHwrNH9@cluster0.ee6q8z1.mongodb.net/productsdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:');
  });

