'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "question required, must be at least 8 char"],
        minlength: 8,
    },
    option1: {
        type: String,
        required: [true, "Option1 required, must be at least 4 char"],
        minlength: 4,
    },
    option2: {
        type: String,
        required: [true, "Option1 required, must be at least 4 char"],
        minlength: 4,
    },
    option3: {
        type: String,
        required: [true, "Option1 required, must be at least 4 char"],
        minlength: 4,
    },
    option4: {
        type: String,
        required: [true, "Option1 required, must be at least 4 char"],
        minlength: 4,
    },
    count1: {
        type: Number,
        default: 0,
    },
    count2: {
        type: Number,
        default: 0,
    },
    count3: {
        type: Number,
        default: 0,
    },
    count4: {
        type: Number,
        default: 0,
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }

},{ timestamps: true })

module.exports = mongoose.model('Poll', PollSchema)
console.log("Poll model was registered")
const Poll = mongoose.model('Poll', PollSchema)