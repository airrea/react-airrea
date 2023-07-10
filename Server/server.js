const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;


app.use(cors({origin: true}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth : {
        user : process.env.USER_EMAIL,
        pass : process.env.PASS
    }
})


app.post("/register-interest",function (req,res){
    const {name, email, phone, message } = req.body;

    const optionsForAdmin = {
        from : process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO.split(", "),
        subject: 'Thanks for registering interest',
        text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`,
    }

    const optionsForInterest = {
        from : process.env.EMAIL_FROM,
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

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`App is listening on PORT ${port}`);
})