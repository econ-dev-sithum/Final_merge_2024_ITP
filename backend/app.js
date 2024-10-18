const express = require("express");
require('dotenv').config({ path: './env/.env' }); // Ensure correct path to .env file
const mongoose = require("mongoose");
const config = require('config');
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const complainRoutes = require("./Route/complaintsRoute.js");
const Feedback = require("./Route/feedBackDetailRoute.js");
const userRouter = require("./Route/food/userRoute.js");
const foodRouter = require("./Route/food/foodRoute.js");
const cartRouter = require("./Route/food/cartRoute.js");
const orderRouter = require("./Route/food/orderRoute.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(require("./Route/TransportRoutes.js"));
app.use("/complaints", complainRoutes);
app.use('/feedBackDetail', Feedback);

app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

// Database connection
mongoose.connect(config.get('db.uri'))
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
