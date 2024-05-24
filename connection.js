const mongoose = require('mongoose');

const MongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/project-management';

mongoose.connect(MongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});