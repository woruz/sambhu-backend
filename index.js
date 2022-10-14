const express = require('express')
const {connectDB} = require('./connect')
const routes = require('./routes')


const app = express()
app.use(express.json())

connectDB()

routes(app)

app.use(function (req,res,next){
    res.status(404).send('Are you lost!??')
})

app.listen(4000,() => console.log(`port is running on 4000`))