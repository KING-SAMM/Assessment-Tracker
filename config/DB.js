const mongoose = require('mongoose');

// Map Global Promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(
    // Connection string here, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     }
)
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

