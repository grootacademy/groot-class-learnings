const mongoose = require('mongoose');

const dbURI = "mongodb://localhost:27017/image-editor";

const connectMongo = () => {
    mongoose.connect(dbURI, () => {
        console.log("connection is establised");
    });
}

// non-blocking I/O model

module.exports = connectMongo;
