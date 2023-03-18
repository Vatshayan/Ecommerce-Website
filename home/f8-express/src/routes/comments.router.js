const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments.controller')

router.get('/', commentsController.index)
router.post('/', commentsController.store)
router.get('/:id', commentsController.show)
router.put('/:id', commentsController.update)
router.delete('/:id', commentsController.destroy)

module.exports = router
