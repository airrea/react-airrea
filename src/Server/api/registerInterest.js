const express = require('express');
const {sendMail} = require('../utilities');

const router = express.Router();

router.post('/', async (req,res) =>{
    const {name, email, phone, message } = req.body;

    // some basic serverside validation to make sure all details are here
    //I would recommend adding more client side validation maybe using regex
    //so the data passed sent over is in a form you'd like

    if(!email || !name) {
        return res.status(500).json({error:'Server error. please try again!'});
    }

    try{
        //send over details over to the monngo db
        // first we need to access the collection of potential users, which needs to be defined beforehand in mongodbAtlas
        const interestedCollection = req.app.locals.db.collection('[insert name of collection]');
        await interestedCollection.insertOne({
            name, 
            email,
            phone, 
            message
        })

        sendMail(name, email, message)

        return res.status(200).json({
            name, 
            email, 
            phone, 
            message
        }).send()

        
    } catch(error) {
        return res.status(500).json({error: "Server error. please try again"});
        
    }
})

module.exports.registerInterest = router;
