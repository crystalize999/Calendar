const Router = require('express')
const router = new Router()
const brandContorller = require('../controllers/brandController')


router.post('/', brandContorller.create )
router.get('/', brandContorller.getAll)
router.delete('/',)


module.exports = router