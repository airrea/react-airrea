const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
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

    const optionsForAdmin = {
        from : "tolu@airrea.co.uk",
        to: "toluoyed26@gmail.com",
        subject: 'Thanks for registering interest',
        text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`,
    }

    const optionsForInterest = {
        from : "tolu@airrea.co.uk",
        to: email,
        subject: 'Thanks for registering interest in Airrea',
        text: "We would get back to you with an answer to your question as soon as possible",
    }

    transporter.sendMail(optionsForAdmin, (error, info) =>{
        if (error) {
            console.log("== Admin Message Failed ==")
            console.log(error)
            res.json({
                status: "fail",
            });
        } else {
            console.log("== Admin Message Sent ==" + info);
            res.json({
                status: "success",
            });
        }
    })

    transporter.sendMail(optionsForInterest, (error, info) =>{
        if (error) {
            console.log("== User Message Failed ==")
            console.log(error)
            res.json({
                status: "fail",
            });
        } else {
            console.log("== User Message Sent ==" + info);
            res.json({
                status: "success",
            });
        }
    })
});

app.listen(port, ()=>{
    console.log(`App is listening on PORT ${port}`);
})