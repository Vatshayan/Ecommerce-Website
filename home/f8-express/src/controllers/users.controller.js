const User = require('../models/user.model')

module.exports = {
    // Get all users
    // [GET] /
    async index(req, res) {
        const users = await User.find({}).sort({ createdAt: -1 })
        res.json({ data: users })
    },

    // Create a user
    // [POST] /
    async store(req, res) {
        try {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            const newUser = await user.save()
            res.status(201).json({ data: newUser })
        } catch (error) {
            console.log(error)
            res.status(400).send('Bad request.')
        }
    },

    // Get a user by ID
    // [GET] /:id
    async show(req, res) {
        const user = await User.findById(req.params.id).exec()
        res.json({ data: user })
    },

    // Update a user
    // [PUT] /:id
    async update(req, res) {
        await User.findOneAndUpdate({
            _id: req.params.id
        }, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await User.findById(req.params.id).exec()
        res.json({ data: user })
    },

    // Delete a user
    // [PUT] /:id
    async destroy(req, res) {
        const user = await User.findById(req.params.id).exec()
        if (!user) {
            res.status(404).json({
                code: 404,
                message: 'Resource not found.'
            })
        }

        await User.findByIdAndDelete(req.params.id)
        res.status(204).send(null)
    }
}