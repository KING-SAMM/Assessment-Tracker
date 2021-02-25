const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Pusher = require("pusher");

const Score = require('../models/Score');

const pusher = new Pusher({
    appId: "1160172",
    key: "a29727e57463a5749bcf",
    secret: "048715fac9c304eabb20",
    cluster: "eu",
    useTLS: true
});

router.get('/', (req, res) => {
    Score.find().then(scores => res.json({success: true, scores: scores}));
});    

router.post('/', (req, res) => {
    const newScore = {
        as: req.body.as,
        points: 1
    }

    new Score(newScore).save().then(score => {
        pusher.trigger("as-grid", "as-score", {
            points: parseInt(score.points),
            as: score.as
        });
        return res.json({
            success: true, 
            message: "Thank you for voting."
        })
    });
}); 

module.exports = router;