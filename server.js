const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_Database', { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', function () {
  console.log('connected...');
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening ${port}`);
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

