const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log("MongoDB connection successful.");
})

const todoRouter = require('./routes/todo')
app.use('/todo/api/', todoRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

