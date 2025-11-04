import { Schema, model } from "mongoose";
import { type } from './../node_modules/nodemon/index.d';

const userSchema = new Schema({
    fullName: {
        type: 'String',
        required: [true, 'Name is required'],
        minLength: [5, "Name must be 5 character"],
        maxLength: [50, "Name shoud be  50 character"],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        unique: true,
        match: [
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: 'String',
        require: [true, 'Password  is  required'],
        minLength: [8, 'Password  should  be 8 character'],
        select: false,
    },
    avatar: {
        public_id: {
            type: 'String'
        },
        secure_url: {
            type: 'String'
        }
    },
    role: {
        type: 'String',
        enum: ['USER', 'ADMIN'],
        default:'USER'
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date
}, {
    timestamps:true
});

const User = model('User', userSchema);
export default User;