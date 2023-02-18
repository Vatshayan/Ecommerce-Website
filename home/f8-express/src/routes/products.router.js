const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products.controller')

router.get('/', productsController.index)
router.post('/', productsController.store)
router.get('/sync-from-kiotviet', productsController.syncFromKiotviet)
router.get('/:id', productsController.show)
router.put('/:id', productsController.update)
router.delete('/:id', productsController.destroy)

module.exports = router
