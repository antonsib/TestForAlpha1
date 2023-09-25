const Router = require('express')
const router = new Router()
const getRouter = require('./getRouter')


router.use('/getAll', getRouter)
router.use('/get', getRouter)

module.exports = router