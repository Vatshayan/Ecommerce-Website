const fetch = require('node-fetch');
const Product = require('../models/product.model')
const Category = require('../models/category.model')

module.exports = {
    // Get all comments
    // [GET] /
    index(req, res) {
        // Category ID: 60ce129d6bf995194d956c76
        // const products = await Product.find({
        //     categoryId2: '60ce129d6bf995194d956c76'
        // })
    },

    // Create a comment
    // [POST] /
    store(req, res) {

    },

    // Get a comment by ID
    // [GET] /:id
    show(req, res) {

    },

    // Update a comment
    // [PUT] /:id
    update(req, res) {

    },

    // Delete a comment
    // [PUT] /:id
    destroy(req, res) {

    },

    async syncFromKiotviet() {
        let perPage = 100
        let currentPage = 1

        try {
            const res = await fetch(`https://public.kiotapi.com/Products?pageSize=${perPage}&page=${currentPage}`, {
                headers: {
                    Retailer: 'tuoihangxachtayduc',
                    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MjQxMTUwNzIsImV4cCI6MTYyNDIwMTQ3MiwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiYXVkIjpbImh0dHA6Ly9pZC5raW90dmlldC52bi9yZXNvdXJjZXMiLCJLaW90VmlldC5BcGkuUHVibGljIl0sImNsaWVudF9pZCI6IjM2YTIxYzdmLTk0MTEtNDkxYS04ZmU1LTMwMWVkYWZkNjdiOSIsImNsaWVudF9SZXRhaWxlckNvZGUiOiJ0dW9paGFuZ3hhY2h0YXlkdWMiLCJjbGllbnRfUmV0YWlsZXJJZCI6IjEwNDg1MiIsImNsaWVudF9Vc2VySWQiOiIxNzk4NiIsImNsaWVudF9TZW5zaXRpdmVBcGkiOiJUcnVlIiwic2NvcGUiOlsiUHVibGljQXBpLkFjY2VzcyJdfQ.QJPGe0ql7USZfzNOn771HVmHakTXTN-0AvIHsX83OXphBT7pUQZd8awz9uEmJjzwwzt0cB_7sGnOU1ZvRwmnWOM8rnNX40ttvsCfJSFCK00XQKHMqKMHoCVXTppaBGOzDhi5jxMwWCa8qYUgl1itVjky_PsaPAg_8OiQIvJ_wVdzZgzE-wopuV0jZ0N5yfcNU_Ipnd8Dckv6CwJZT48BVd2nZtlw1iatffF-YdGzW5gplslCea7XQfvy-77Sa0oZUvzuwFK1AAm4-_9s1FgR4_Xhudl_E8l2XjT_EOsbo5CkhSFp2ARTaX0vmqAfPXFAGhBoHSVwryInjB0udzkNqg'
                }
            })
            const jsonRes = await res.json()

            let i = 0
            for (const product of jsonRes.data) {
                i++
                const newProduct = new Product(product)
                await newProduct.save()
                console.log(`[${i}] Product saved: ${newProduct.name}`)

                let category = await Category.findOne({
                    id: newProduct.categoryId
                })
                .exec()

                // Kiểm tra nếu không tồn tại category
                // thì lấy category từ product => Lưu vào DB
                if (!category) {
                    category = new Category({
                        id: newProduct.categoryId,
                        name: newProduct.categoryName,
                    })
                    await category.save()

                    console.log(`[${i}] Category saved: ${category.name}`)
                }

                newProduct.categoryId2 = category._id
                await newProduct.save()
            }

        } catch (error) {

        }
    }
}