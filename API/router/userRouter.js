const express = require('express')
const {userController} = require('../controller')
const router = express.Router()

router.get('/users', userController.getUser)
router.post('/users', userController.addData)

module.exports = router