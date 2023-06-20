const express = require('express');
const app = express();
const cors = require('cors');
const {db} = require('./utilities');
const {registerInterest} = require('./api/registerInterest')



db("[insrt mongoDB connection string ]", app);

app.use(cors({origin: true}));
app.use(express.json());

app.use("/api/register-interest",registerInterest);





app.listen(4001, ()=>{
    console.log(`App is listening on PORT ${4001}`);
})