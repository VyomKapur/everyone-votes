const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	aadharNumber: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    constituency: {
        type: String,
        required: true
    },
    hasVoted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

userSchema.statics.login = async function (aadharNumber, phone) {
    if(!aadharNumber || !phone){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({ aadharNumber, phone })
    if(!user){
        throw Error("User does not exist")
    }
    return user
}   

userSchema.statics.register = async function (aadharNumber, phone, constituency) {
    if(!aadharNumber || !phone || !constituency){
        throw Error('All fields must be filled')
    }
    const exists = await this.findOne({ aadharNumber })
    if(exists){
        throw Error("Aadhar already registered!")
    }
    const user = await this.create({aadharNumber, phone, constituency})
    return user
}   

module.exports = mongoose.model('User', userSchema)