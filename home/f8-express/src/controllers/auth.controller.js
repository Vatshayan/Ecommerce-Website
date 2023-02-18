const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const User = require('../models/user.model')
const jwtConfig = require('../config/jwt')

module.exports = {
    // [POST] /register
    async register(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                code: 422,
                errors: errors.array()
            });
        }

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

    // [POST] /login
    async login(req, res) {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        if (user) {
            const token = jwt.sign({ sub: user.id }, jwtConfig.secret, {
                expiresIn: jwtConfig.expiresIn
            });
            res.json({
                data: { token }
            })
        } else {
            res.status(401).json({
                code: 401,
                message: "Unauthorized"
            })
        }
    },

    // [POST] /current-user
    async currentUser(req, res) {
        res.json({
            data: req.user
        })
    }
}