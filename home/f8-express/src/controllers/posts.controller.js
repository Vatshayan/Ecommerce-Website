module.exports = {
    // Get all posts
    // [GET] /
    index(req, res) {
        res.json([
            'All posts'
        ])
    },

    // Create a post
    // [POST] /
    store(req, res) {
        res.json([
            'Create a post'
        ])
    },

    // Get a post by ID
    // [GET] /:id
    show(req, res) {
        res.json([
            'A post'
        ])
    },

    // Update a post
    // [PUT] /:id
    update(req, res) {
        res.json([
            'Update post'
        ])
    },

    // Delete a post
    // [PUT] /:id
    destroy(req, res) {
        res.json([
            'Delete post'
        ])
    }
}