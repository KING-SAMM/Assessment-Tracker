const express = require('express');
const router = express.Router();
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1160172",
    key: "a29727e57463a5749bcf",
    secret: "048715fac9c304eabb20",
    cluster: "eu",
    useTLS: true
});

router.get('/', (req, res) => {
    res.send('POLL');
});    

router.post('/', (req, res) => {
    pusher.trigger("as-grid", "as-score", {
        points: 1,
        as: req.body.as
    });
    return res.json({
        success: true, 
        message: "Thank you for voting."
    })
}); 

module.exports = router;