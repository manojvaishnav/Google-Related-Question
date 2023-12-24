const express = require('express')
require('dotenv').config()
const questionRoutes=require('./routes/questionRoutes')

// Variables
const app = express()
const port = process.env.PORT

// Middleware
app.use(express.json())

// Database Connection
require('./database/conn')

// Routes
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.use('/api/v1',questionRoutes)
// Server
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})