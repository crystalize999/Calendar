const Router = require('express')
const router = new Router()
const productController = require('../controllers/productContorller')


router.post('/', productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.delete('/:id', )


module.exports = router