const users = require('express').Router()
const db = require('../models')
const { User } = db
const { Op } = require('sequelize')

// FIND ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundusers = await users.findAll({
            order: [['rating', 'DSC']]
        })
        res.status(200).json(foundusers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A USER
users.get('/:id', async (req, res) => {
    try {
        const foundusers = await users.findOne({
            where: { user_id: req.params.id }
        })
        res.status(200).json(foundusers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A USER
users.post('/', async (req, res) => {
    try {
        const newUser = await users.create(req.body)
        res.status(200).json({
            message: 'Created a new user profile!',
            data: newUser
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER PROFILE
users.put('/:id', async (req, res) => {
    try {
        const updateduser = await users.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updateduser} profile`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE USER
users.delete('/:id', async (req, res) => {
    try {
        const deleteduser = await users.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deleteduser}`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = users