const mongoose = require('mongoose');

// Map Global Promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(
    /* 'mongodb+srv://Owner:%26%23oMnEr4581@cluster0.9lwab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
     'mongodb+srv://KCSamm:kcEpIsTeMoLoGy4581@cluster0.z83z1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', */
    'mongodb+srv://KCSamm:kcEpIsTeMoLoGy4581@score.snwx3.mongodb.net/assessmentScore?retryWrites=true&w=majority', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     }
)
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

// kcEpIsTeMoLoGy4581

// Current IP: 102.89.0.234