const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/get', async (req, res) => {
    try {
        const tasks = await Task.find();
        const formattedTasks = tasks.map(task=>({id:task._id, name:task.name, status:task.status}));
        res.json(formattedTasks);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/add', async (req, res) => {
    const {name, status} = req.body;

    try {
        const task = new Task({
            name,
            status
        });
        await task.save();
        res.json({msg: 'Task saved successfully'});
    } catch (err) {
        res.json({ message: err });
    }
});

router.put('/update/:id', async (req, res) => {
    const {name, status} = req.body;
    const taskId = req.params.id;

    try {
        await Task.updateOne ( {_id: taskId}, { $set: {name, status} });
        res.json({msg: 'Task updated successfully'});
    } catch (err) {
        res.json({ message: err });
        console.log(err);
    }
});

module.exports = router;