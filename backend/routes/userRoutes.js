const express = require('express')
const router = express.Router()

const { getAllUsers, registerUser, loginUser } = require('../controllers/userController')

router.get('/getusers', getAllUsers)

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports = router