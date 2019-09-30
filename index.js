const express = require('express')
const mongoose = require('mongoose')
const app = express()
const expressJwt = require("express-jwt")
require('dotenv').config()
const port = process.env.PORT || 5566
const path = require('path')



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hotel', {useNewUrlParser: true}).then(() => {
    console.log('connected to mongo')
})
.catch(err => {
    console.log(err)
})
 

app.use('/', express.json())

app.use('/users', require('./routers/UsersRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET || "just some words for local"}))
app.use('/api/reservations', require('./routers/ReservationsRouter'))
app.use(express.static(path.join(__dirname, "client", "build")))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})
app.listen(port, () => {
    console.log(`app is listening ${port}`)
})

