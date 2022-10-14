const mongoose = require('mongoose')


const connectDB = async() => {
    await mongoose.connect('mongodb+srv://typing:qwerty12@cluster0.glirinc.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('DB is connected'))
    .catch((err) => console.warn(err))
}


module.exports = {connectDB}