const router = require('express').Router()
const Restaurant = require('../models/restaurant.js')

router.post('/addRestaurant',async(req,res)=>{
    try {
        const {name,address,contact} = req.body
        const rest = new Restaurant({
            name,
            address,
            contact
        });
        const data = await rest.save()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/getAllrestaurnat',async(req,res)=>{
    try {
        const data = await Restaurant.find();
        res.status(200).json(data);
    } catch (error) {
        res.send(error.message)
    }
})

router.put('/updateRestaurant/:id',async(req,res)=>{
    try {
        const data = await Restaurant.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{new:true}
        );
        res.send(data)
    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
})

router.get('/getRestaurant/:id',async(req,res)=>{
    try {
        const result = await Restaurant.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/deleteRestaurant/:id',async(req,res)=>{
    try {
        const result = await Restaurant.findByIdAndDelete(req.params.id)
        res.send("Restaurant is deleted")
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router