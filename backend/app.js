//Password = UM0Syrg5u5iRPglM
const express = require("express");
require("dotenv").config({ path: "./env/.env" });
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const complainRoutes = require("./Route/complaintsRoute.js");
const roomReservationrouter = require("./Route/RoomReservationRoute/UserRoute.js");
const employeeRoutes = require("./Route/employeeRoute/employee.routes.js");
const userRoutes = require("./Route/employeeRoute/users.routes.js");
const leaveRequestRoutes = require("./Route/employeeRoute/leave-request.routes.js");
const attendanceRoutes = require("./Route/employeeRoute/attendance.routes.js");

const app = express();
//Middleware
app.use(cors());
app.use(express.json());

app.use(require("./Route/TransportRoutes.js"));
app.use("/complaints", complainRoutes);
app.use("/users", roomReservationrouter);
app.use("/api/employees", employeeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/leave-request", leaveRequestRoutes);
app.use("/api/attendance", attendanceRoutes);


//Database connection
mongoose
  .connect(config.get("db.uri"))
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
