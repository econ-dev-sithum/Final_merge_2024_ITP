import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TransportHome from "./component/Transport/transportHome";
import Addtranport from "./component/Transport/addtranport";
import ComplaintForm from "./complainnts/ComplaintsCreate";
import ComplaintsView from "./complainnts/ComplaintsView";
import ReplyComplaint from "./complainnts/ReplyComplaint";
import Home from "./roomReservation/Components/Home/Home";
import Nav from "./roomReservation/Components/Nav/Nav";
import Accomodation from "./roomReservation/Components/Accomodation/Accomodation";
import CheckOut from "./roomReservation/Components/CheckOut/CheckOut";
import Sidebar from "./roomReservation/Components/Sidebar/Sidebar";
import Login from "./Auth/login";
import Register from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/reset-password";
import Dashboard from "./DashBoard/Dashboard";
import AttendanceManagementPage from "./Employee/Attendance";

//juthmini
import "./App.css";
import EmployeeManagementPage from "./Employee/Employee";
import LeaveTrackingPage from "./Employee/LeaveTracking";

function App() {
  const storedAuthToken = localStorage.getItem("authToken");
  const storedUserType = localStorage.getItem("loggedInUserType");

  const isAdminAuthenticated = () => {
    return storedAuthToken && storedUserType === "admin";
  };
  return (
    <BrowserRouter>
      <div>
        {/* <Sidebar/>
      <Nav /> */}

        {/* /add footer room reservation  */}
        <Routes>
          <Route path="/transportHome" element={<TransportHome />} />
          <Route path="/addtranport" element={<Addtranport />} />
          <Route path="/addcomplaints" element={<ComplaintForm />} />
          <Route path="/allcomplaints" element={<ComplaintsView />} />
          <Route path="/reply-complaint/:id" element={<ReplyComplaint />} />
          <Route path="/room-reservation" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/Accomodation" element={<Accomodation />} />
          <Route path="/checkout" element={<CheckOut />} />

          <Route path="/employee" element={<EmployeeManagementPage />} />
          <Route path="/leaveTracking" element={<LeaveTrackingPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<AttendanceManagementPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
