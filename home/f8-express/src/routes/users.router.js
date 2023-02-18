const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.controller')

router.get('/', usersController.index)
router.post('/', usersController.store)
router.get('/:id', usersController.show)
router.put('/:id', usersController.update)
router.delete('/:id', usersController.destroy)

module.exports = router
