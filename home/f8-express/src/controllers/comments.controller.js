module.exports = {
    // Get all comments
    // [GET] /
    index(req, res) {
        // Fake Database
        const comments = [
            {
                id: 1,
                comment: 'Xin chào các bạn!'
            },
            {
                id: 2,
                comment: 'Chào lại!'
            }
        ]

        res.json({
            data: comments
        })
    },

    // Create a comment
    // [POST] /
    store(req, res) {
        res.json([
            'Create a comment'
        ])
    },

    // Get a comment by ID
    // [GET] /:id
    show(req, res) {
        res.json([
            'A comment'
        ])
    },

    // Update a comment
    // [PUT] /:id
    update(req, res) {
        res.json([
            'Update comment'
        ])
    },

    // Delete a comment
    // [PUT] /:id
    destroy(req, res) {
        res.json([
            'Delete comment'
        ])
    }
}