/*jslint node: true */
"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: "Por favor, entre com o nome da tarefa"
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ["pending"]
    }
});
module.exports = mongoose.model("Tasks", TaskSchema);