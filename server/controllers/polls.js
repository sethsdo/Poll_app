const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = {
    create: (req, res) => {
        // console.log(req.body, "before")
        const current = User.findOne({ email: req.session.user }).exec(function (err, user) {
            const poll = new Poll(req.body);
            // console.log(user._id)
            poll._user = user._id
            poll.save()
                .then(() => {
                    console.log("success")
                    res.json(true)
                })
                .catch(err => {
                    console.log("can't find")
                    res.status(500).json(err)
                })
        })
    },
    getPolls: (req, res) => {
        // console.log(Poll.findOne({}))
        Poll.find({}).populate('_user')
            .then(list => res.json(list))
            .catch(err => {
                console.log("can't find")
                res.status(500).json("can't find")
            }
        )
    },
    remove: (req, res) => {
        // console.log(req.params)
        Poll.findByIdAndRemove({ _id: req.params.id })
            .then(res.json(true))
            .catch(err => {
                console.log("wasn't removed")
                res.status(500).json("can't find")
            })
    },
    poll: (req, res) => {
        // console.log(req.params.id)
        Poll.findOne({ _id: req.params.id }).populate('_user')
            .then(list => res.json(list))
            .catch(err => {
                console.log("can't find")
                res.status(500).json("can't find")
            }
            )
    },
    optionLikes: (req, res) => {
        // console.log("made it to likes")
        // console.log(req.body.id, req.body.num)
        Poll.findOne({ _id: req.body.id }, (err, question) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if(req.body.num === 1){
                    question.count1++
                } else if (req.body.num === 2) {
                    question.count2++
                } else if (req.body.num === 3) {
                    question.count3++
                } else {
                    question.count4++
                }
                question.save()
                    .then(() => {
                        console.log("success")
                        res.json(true)
                    })
                    .catch(err => {
                            res.status(500).json("can't add")
                    })
            }
        })
    }

}