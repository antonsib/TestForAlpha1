const Router = require('express')
const router = new Router()
const Controller = require('../controllers/Controller')

router.get('/', Controller.getAll)
router.get('/get', Controller.get)

module.exports = router