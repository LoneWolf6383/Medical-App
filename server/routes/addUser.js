const router = require('express').Router()
const {User} = require('../models/userModel')

router.post('/', async (req, res) => {
    try {
        if (await User.findOne({ })) {
            return res.send({ message: 'Logged In' })
        }
        else    {
            await new User({...req.body}).save( )
            return res.send('User Created')
        }
    }
    catch (error) {
        return res.send({ message: error })
    }
})
module.exports=router   