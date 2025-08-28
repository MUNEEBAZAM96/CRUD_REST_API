import mongoose from 'mongoose';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
  res.send('User list');
});

mongoose.connect('mongodb+srv://muneebazam96_db_user:0nBXkfRMPgFVwWJq@cluster0.w6acd9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  
