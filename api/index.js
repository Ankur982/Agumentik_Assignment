const dotenv = require('dotenv');
const express = require('express');
const dbConnect = require("./config/dbConnect");
const userRoutes = require("./routes/user")
const cors = require("cors");

//dotenv
dotenv.config();

//connecting to database
dbConnect();

const app = express();


//using cors to connect frontend and backend
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


//api base routes

app.use("/auth", userRoutes);



//listening server

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server Started On Port ${process.env.PORT || 8080}`)
});