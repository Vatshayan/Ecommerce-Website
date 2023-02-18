const postsRouter = require('./posts.router')
const commentsRouter = require('./comments.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const productsRouter = require('./products.router')

function routes(app) {
    app.use('/api/posts', postsRouter)
    app.use('/api/comments', commentsRouter)
    app.use('/api/users', usersRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/products', productsRouter)
}

module.exports = routes
