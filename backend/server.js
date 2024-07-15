const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const groupRoutes = require('./routes/groupRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());

app.use('/api/groups', groupRoutes);

mongoose.connect('mongodb+srv://harshtripathi042:harsh123@cluster0.etqbz6r.mongodb.net/splitter', {
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});
