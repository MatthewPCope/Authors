const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/authors", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("The database is rockin' n rollin'."))
    .catch(err => console.log("Something went terribly wrong and the database ain't rockin'.", err));

