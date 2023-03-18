const productsController = require('./controllers/products.controller')
const dbConnect = require('./lib/mongodb')

// Connect to MongoDB
dbConnect(() => {
    productsController.syncFromKiotviet()
})
