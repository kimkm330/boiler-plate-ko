const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 공백을 없애주는 역할
        unique: 1 // 중복불가
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,  // ex)1이면 관리자, 0이면 일반유저
        default: 0
    },
    image: String,
    token:{ //유효성관리
        type: String
    },
    tokenExp: {
        type: Number
    }


})


const User = mongoose.model('User', userSchema)

module.exports = {User} //다른 곳에서도 사용하기 위함