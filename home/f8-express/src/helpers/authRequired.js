const jwt = require('jsonwebtoken')
const config = require('../config/jwt')
const User = require('../models/user.model')

function authRequired(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({
            code: 401,
            message: "Unauthorized"
        })
    }

    jwt.verify(token, config.secret, async (err, payload) => {
        if (err) {
            return res.status(403).json({
                code: 403,
                message: "Forbidden"
            })
        }
        
        const userId = payload.sub
        const user = await User.findById(userId)

        req.user = user

        next()
    })
}

module.exports = authRequired
