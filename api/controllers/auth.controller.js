const bcrypt = require('bcrypt')
const User = require('../models/user.models')
const router = require('express').Router()
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body)    
    res.status(200).json(user)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error not create user')
    }
}

const login = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        return res.status(403).send('User not found')
    }
    console.log(req.body.password)
    console.log(user.password)

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (!result) {
            return res.status(403).send('Password incorrect')
        }

      const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '8h'})
        return res.status(201).json({ token })
    })
}


module.exports = {
    signUp,
    login
}