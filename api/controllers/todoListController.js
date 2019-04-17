/*jslint node: true */
"use strict";

const mongoose = require("mongoose"),
Task = mongoose.model("Tasks");

exports.list_all_tasks = function(req, res) {
    Task.find({}, (error, task) => {
        if(error)
            res.send(error);
        res.json(task);
    });
};

exports.create_a_task = function(req, res) {
    const newTask = new Task(req.body);
    newTask.save((error, task) => {
        if(error)
            res.send(error);
        res.json(task);
    });
};

exports.read_a_task = function(req, res) {
    Task.find(req.params.taskId, (error, task) => {
        if(error)
            res.send(error);
        res.json(task);
    })
};

exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId},req.body, {new: true}, (error, task) => {
        if(error)
            res.send(error);
        res.json(task);
    });
};

exports.delete_a_task = function(req, res) {
    Task.remove({
        _id: req.params.taskId
    },
    (error, task) => {
        if(error)
            res.send(error);
        res.json({message: "Task successfully deleted"});
    })
};