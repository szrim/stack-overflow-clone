const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/codingOHBackend')
    .then(() => console.log('Connected to mongoDB database'))
    .catch((err) => console.log('Error connecting to mongoDB', err));