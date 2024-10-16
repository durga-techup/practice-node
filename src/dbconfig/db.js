const mongoose = require('mongoose')
const mongoUri = `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0.0rmn9.mongodb.net/${process.env.MONGO_INITDB_DATABASE}`
const dbConnection = async () => {
    try {
        mongoose.connect(mongoUri)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.error('MongoDB connection error:', error)
        process.exit();

    }
}
module.exports = { dbConnection }

