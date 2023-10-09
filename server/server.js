const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config.jsx');
require('./routes/author.routes.jsx')(app);
app.listen(8000, () => {
    console.log("Crackalackin' at Port 8000")
})

