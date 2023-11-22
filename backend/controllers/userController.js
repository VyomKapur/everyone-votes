const mongoose = require('mongoose')
const User = require('../models/Users')
const jwt = require('jsonwebtoken')

// const createToken = (_id) => {
//     return jwt.sign({_id}, process.env.SECRET_KEY, { expiresIn: '3d' })
// }

const loginUser = async(req, res) => {
    const { aadharNumber, phone } = req.body
    try {
        const user = await User.login(aadharNumber, phone)
        // const token = createToken(user._id)
        let isAdmin = false;
        if(user.isAdmin === true){
            isAdmin = true
        }
        res.status(200).json({aadharNumber, isAdmin})
    } catch(error){
        res.status(400).json({Message: "Error logging in user"})
    }
}

const registerUser = async(req, res) => {
    const { aadharNumber, phone, constituency } = req.body
    try{
        const user = await User.register(aadharNumber, phone, constituency)
        // const token = createToken(user._id)
        res.status(200).json({aadharNumber})
    }catch(error){
        console.log(error)
        res.status(400).json({Message: "Error creating user"})
    }
}

const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({})
        res.status(200).json({users})
    } catch(err){
        console.log(err)
        res.status(400).json({Message: "Error fetching user"})
    }
}

module.exports = {
    loginUser,
    registerUser,
    getAllUsers
}