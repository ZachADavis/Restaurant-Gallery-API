const restaurants = require('express').Router()
const db = require('../models')
const { Restaurant } = db
const { Op } = require('sequelize')

// FIND ALL
restaurants.get('/', async (req, res) => {
    try {
        const foundRestaurants = await Restaurant.findAll({
            order: [['rating', 'DSC']]
        })
        res.status(200).json(foundRestaurants)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC restaurant
restaurants.get('/:id', async (req, res) => {
    try {
        const foundRestaurant = await Restaurant.findOne({
            where: { restaurant_id: req.params.id }
        })
            .populate('comments')
            .then(restaurant => {
                console.log(restaurant.comments)
                res.render('restaurants/show', { restaurant })
            })
        res.status(200).json(foundRestaurant)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A restaurant
restaurants.post('/', async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new restaurant',
            data: newRestaurant
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A restaurant
restaurants.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.update(req.body, {
            where: {
                restaurant_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRestaurant} restaurant(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A restaurant
restaurants.delete('/:id', async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.destroy({
            where: {
                restaurant_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRestaurant} restaurant(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Reviews

// comment
restaurants.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/restaurant/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

// delete comment
restaurants.delete('/:id/comment/:commentId', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.commentId)
        .then(() => {
            res.redirect(`/restaurants/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// EXPORT
module.exports = restaurants