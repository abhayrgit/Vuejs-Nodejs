const express = require('express')
const connectDB = require('./db/connectdb.js')
var cors = require('cors')
const user = require('./models/user.js')
const restaurant = require('./models/restaurant')
const userRoutes = require('./routes/userRoutes.js')
const restaurantRoutes = require('./routes/restaurantRoutes.js')
const port  = process.env.PORT || "3030"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017";
const app = express()

app.get('/',(req,res)=>{
    console.log("Api is running");
    res.send("Api is running")
})

// DataBase Connection
connectDB(DATABASE_URL);


app.use(express.json());
app.use(cors())


//routes
app.use('/api/user/', userRoutes)
app.use('/api/restaurant/',restaurantRoutes)


app.listen(port,(error)=>{
    if(!error){
        console.log("server is connected on port 3030");
    }
})