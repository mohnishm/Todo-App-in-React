const express = require('express');
let Todo = require('../models/todo');
const router = express.Router();

router.get('/', (req, res) => {
    Todo.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/task', (req, res) => {
    const data = req.body.data;
    const done = req.body.done;

    const newTask = new Todo({
        data,
        done
    });
    
    newTask.save()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/task/:id', (req, res) => {
    
    Todo.findById(req.params.id)
    .then(task => {
        task.done = req.body.done

        task.save()
        .then(t => res.json(t))
        .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.post('/delete/:id', (req, res) => {
    Todo.findById(req.params.id)
    .then(task => {
        task.done = true;

        task.save()
        .then(t => res.json(t))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;