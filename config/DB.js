const mongoose = require('mongoose');

// Map Global Promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(
    'mongodb+srv://Owner:&#oMnEr4581@cluster0.9lwab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
)
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err))