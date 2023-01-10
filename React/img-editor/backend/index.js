// api endpoint 
const express = require('express')
const connectMongo = require('./db')
const cors = require('cors')

connectMongo();

const app = express()
const port = 3003

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use('/api/auth', require('./routes/auth'))
app.use('/api/images', require('./routes/images'))


app.listen(port, () => {
    console.log(`cloud-notebook app listening on port ${port}`)
})


// mongoose, nodemon, express