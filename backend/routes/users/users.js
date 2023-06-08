const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = require("../../models/users/users")
const router = express.Router()
require("dotenv").config()

const verifyToken = (token, secret) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded; // Returns the decoded token if it's valid
    } catch (error) {
        console.error('Invalid token:', error.message);
        return null; // Token is invalid or expired
    }
};

// Sign up with email and password
router.post("/signup", async (req, res) => {
    try {
        const { displayName, email, password } = req.body
        console.log("-----------------------", req.body);
        const user = await userSchema.findOne({ email }).select('-password')
        if (user) {
            res.json({
                status: false,
                msg: "Email already exits",
                data: user,
            })
            return
        }
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds)
        const newUser = new userSchema({
            displayName,
            email,
            password: hash
        })
        const data = await newUser.save()
        res.status(201).json({ status: true, msg: "Signed up successfully", data })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
})

router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userSchema.findOne({ email })
        console.log("signin ", req.body);
        if (!user) {
            res.json({
                status: false,
                msg: 'Invalid email or password'
            });
            return
        }

        const result = await bcrypt.compare(password, user.password)
        if (!result) {

            res.json({
                status: false,
                msg: 'Invalid email or password'
            });
            return
        } else if (result) {
            const token = jwt.sign({
                id: user._id.toString()
            }, process.env.JWT_SECRET_KEY)
            res.status(200).json({
                status: true,
                token,
                msg: 'Logged in successfully'
            });
        }

    } catch (error) {
        res.status(500).send('Error logging in');
    }
})

router.post("/verifytoken", async (req, res) => {
    const data = verifyToken(req.body.token, process.env.JWT_SECRET_KEY)
    if (data) {
        res.json({
            status: true,
            data,
            msg: 'User Verified'
        })
    } else {
        res.json({
            status: false,
            data,
            msg: 'User Not Verified'
        })
    }
})

module.exports = router

