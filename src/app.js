const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://samson-scheduler-task-app.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
    next();
});

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


module.exports = app




