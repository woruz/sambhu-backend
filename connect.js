const mongoose = require('mongoose')


const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('DB is connected'))
    .catch((err) => console.warn(err))
}


module.exports = {connectDB}