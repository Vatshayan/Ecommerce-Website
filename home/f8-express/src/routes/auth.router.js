const express = require('express')
const { body } = require('express-validator')
const router = express.Router()

const authController = require('../controllers/auth.controller')
const authRequired = require('../helpers/authRequired')

// Express validator: https://express-validator.github.io/docs/
router.post(
    '/register',
    body('name').isLength({ min: 2 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    authController.register
)

router.post('/login', authController.login)
router.get('/current-user', authRequired, authController.currentUser)

module.exports = router
