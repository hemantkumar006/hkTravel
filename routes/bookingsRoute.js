const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
router.post("/bookcar", async (req, res) => {

    req.body.transactionId='1234'
    try{
        const newbooking = new Booking(req.body);
        await newbooking.save();
        const car = await Car.findOne({ _id: req.body.car });
        console.log(req.body.car);
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);
  
        await car.save();
        res.send("Your booking is successfull");
    }

    catch (error) {
        console.log(error);
        return res.status(400).json(error);
        
      }


});

module.exports = router;