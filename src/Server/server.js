const express = require('express');
// const nodemailer = require('nodemailer')
const app = express();
const port = 4000;
const cors = require('cors');
// const {db} = require('./utilities');
// const {registerInterest} = require('./api/registerInterest')
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({path: '../../'})


app.use(cors({origin: true}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth : {
        user : "tolu@airrea.co.uk",
        pass : "'x{My$S4Lxmq"
    }
})

app.post("/register-interest",function (req,res){
    const {name, email, phone, message } = req.body;

    console.log("His: " + name)
    // if(!email || !name) {
    //     return res.status(500).json({error:'Server error. please try again!'});
    // }

    const options = {
        from : "tolu@airrea.co.uk",
        to: "toluoyed26@gmail.com",
        subject: 'Thanks for registering interest',
        text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`,
    }

    transporter.sendMail(options, (error, info) =>{
        if (error) {
            console.log(error)
            console.log(options.to)
            res.json({
                status: "fail",
            });
        } else {
            console.log("== Message Sent ==" + info);
            res.json({
                status: "success",
            });
        }
    })
});

app.listen(port, ()=>{
    console.log(`App is listening on PORT ${port}`);
})

// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });