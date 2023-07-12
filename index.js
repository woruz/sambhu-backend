const express = require('express')
const {connectDB} = require('./connect')
const routes = require('./routes')
require('dotenv').config()
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

connectDB()

routes(app)

app.use(function (req,res,next){
    res.status(404).send('Are you lost!??')
})

app.listen(4000,() => console.log(`port is running on 4000`))