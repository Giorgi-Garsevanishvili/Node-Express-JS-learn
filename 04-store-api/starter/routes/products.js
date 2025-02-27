const expresss = require('express')
const router = expresss.Router()

const {getAllProducts, getAllProductsStatic, addItem} = require('../controllers/products')

router.route('/').get(getAllProducts).post(addItem)
router.route('/static').get(getAllProductsStatic)

module.exports = router