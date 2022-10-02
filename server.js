//Initializing requirements
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'TBD'
    })
})

//Controllers
const restaurantcontroller = require('./controllers/restaurant_controller.js')
app.use('/restaurants', restaurantcontroller)

const reviewcontroller = require('./controllers/review_controller.js')
app.use('/review', reviewcontroller)


const usercontroller = require('./controllers/user_controller.js')
app.use('/user', usercontroller)


// LISTEN
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Live on port: ${process.env.SERVER_PORT}`)
})