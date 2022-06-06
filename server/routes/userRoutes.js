const router = require('express').Router();
const User = require('../models/user.js')
const restaurant = require('../models/restaurant.js')



//signup
router.post('/signup',async(req,res)=>{
    try {
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        const user = await newUser.save()
        res.send(user) 
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

router.post('/login',async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(user){
            if(user.password === req.body.password){
                const data = await user._doc
                res.send(data)
            }else{
                res.send("Wrong Passowrd")
            }
        }else{
            res.send("Wrong cerendials")
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = router