const connectDB = require('./startup/db');
const express = require('express');
const hands = require('./routes/hands');
const app = express();

connectDB();

app.use(express.json());
app.use('/api/hands', hands);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});