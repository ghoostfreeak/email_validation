var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if(!err){ console.log('MongoDB connection succeeded.');}
    else { console.log(err);}
});

require('./user.model');