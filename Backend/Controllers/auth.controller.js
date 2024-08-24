
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/generateTokenAndSetCookie");

const signup = async (req, res) => {
    
    const { name, email, password } = req.body;

try {
        
    if(!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const userAlreadyExists = await User.findOne({ email });
    if(userAlreadyExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
        name,
        email,
        password: hashedPassword,
        verificationToken,
        verificationExpire: Date.now() + 60 * 60 *1000, // 10 minutes
    });

    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({ 
        success: true,
        message: "User registered successfully",
        user: {
            ...user._doc,
            password: undefined,
        }
    });

} catch (error) {
    
}


};




const login = async (req, res) => {
    res.send("Login route");
};

const logout = async (req, res) => {
    res.send("Logout route");
};

module.exports = { signup, login, logout };