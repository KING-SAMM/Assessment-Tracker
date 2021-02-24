const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    as: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});

// Create Collection and Add Schema
const Score = mongoose.model('Score', ScoreSchema);

module.exports = Score;