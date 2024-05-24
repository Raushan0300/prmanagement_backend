const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
    }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;