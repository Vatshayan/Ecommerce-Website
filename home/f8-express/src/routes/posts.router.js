const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts.controller')

router.get('/', postsController.index)
router.post('/', postsController.store)
router.get('/:id', postsController.show)
router.put('/:id', postsController.update)
router.delete('/:id', postsController.destroy)

module.exports = router
