import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/Ucontex.js";

import TransportHome from "./component/Transport/transportHome";
import Addtranport from "./component/Transport/addtranport";
import ComplaintForm from "./complainnts/ComplaintsCreate";
import ComplaintsView from "./complainnts/ComplaintsView";
import ReplyComplaint from "./complainnts/ReplyComplaint";
import CreateADFeedBack from "./pages/Admin/CreateADFeedBack";
import FeedBackDetails from "./pages/Admin/FeedBackDetails.jsx";
import ViewADFeedBack from "./pages/Admin/ViewADFeedBack.jsx";
import UpdateADFeedBack from "./pages/Admin/UpdateADFeedBack.jsx";
import DeleteADFeedBack from "./pages/Admin/DeleteADFeedBack.jsx";
import AfterFeedBack from "./pages/Admin/AfterFeedBack.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./component/Navbar/Navbar.jsx";
import Sidebar from "./component/Sidebar/Sidebar.jsx";
import Addadmin from "./pages/Add/Add";
import AdminList from "./pages/List/List";
import AllOrders from "./pages/Orders/Orders";
import HomeCard from "./pages/foodcart/Home/Home.jsx";
import ExploreMenu from "./Context/ExploreMenu";
import ProductPage from "./inventry/Pages/ProductPage.jsx";

// ##############################################
import Header from "../src/inventry/Components/Header";
import Homein from "./inventry/Pages/Home";
import Footer from "../src/inventry/Components/Footer";
import AddProducts from "./inventry/Pages/AddProducts";
import PostProduct from "./inventry/Pages/PostProduct";
import SignUp from "./inventry/Pages/SignUp";
import SignIn from "./inventry/Pages/SignIn";
import PrivateRoute from "../src/inventry/Components/PrivateRoute.jsx";
import DashBoard from "./inventry//Pages/DashBoard";
import OnlyAdminPrivateRoute from "../src/inventry/Components/OnlyAdminPrivateRoute";
import UpdateProducts from "./inventry//Pages/UpdateProduct";
import Cart from "./inventry/Pages/Cart";
import Ordersummary from "./inventry/Pages/Ordersummary";
import UpdateOrder from "./inventry/Pages/UpdateOrder";
import CheckoutSuccess from "./inventry/Pages/CheckoutSuccess";

import ForgetPassword from "./inventry/Pages/ForgetPassword";
import ResetPassword from "./inventry/Pages/ResetPassword";
import "./App.css";
// ##############################################  food #######################
import Cartfood from "../src/food/pages/Cart/Cart.jsx";
import LoginPopup from "../src/food/components/LoginPopup/LoginPopup";
import PlaceOrder from "../src/food/pages/PlaceOrder/PlaceOrder";
import MyOrders from "../src/food/pages/MyOrders/MyOrders";
import "react-toastify/dist/ReactToastify.css";
import Verify from "../src/food/pages/Verify/Verify";
import Homefood from "../src/food/pages/Home/Home";
import Navbarfood from "../src/food/components/Navbar/Navbar";
// ##############################################  food #######################
import Home from "./roomReservation/Components/Home/Home";
import Nav from "./roomReservation/Components/Nav/Nav";
import Accomodation from "./roomReservation/Components/Accomodation/Accomodation";
import CheckOut from "./roomReservation/Components/CheckOut/CheckOut";
import SidebarRoom from "./roomReservation/Components/Sidebar/Sidebar";
import Login from "./Auth/login";
import Register from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPasswordInventory from "./Auth/reset-password";
import Dashboard from "./DashBoard/Dashboard";
import AttendanceManagementPage from "./Employee/Attendance";
import Main from "../src/pages/Main.jsx";

//juthmini
import "./App.css";
import EmployeeManagementPage from "./Employee/Employee";
import LeaveTrackingPage from "./Employee/LeaveTracking";

const storedAuthToken = localStorage.getItem("authToken");
const storedUserType = localStorage.getItem("loggedInUserType");

const isAdminAuthenticated = () => {
  return storedAuthToken && storedUserType === "admin";
};

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    // <BrowserRouter>

    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbarfood setShowLogin={setShowLogin} />
        <Routes>
          {/* ############################################## foood ######################## */}

          <Route path="/homefood" element={<Homefood />} />
          <Route path="/cart" element={<Cartfood />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/verify" element={<Verify />} />

          {/* ############################################## foood ######################## */}
        </Routes>
      </div>
      {/* inventory hetgtader */}
      <Header />
      {/* inventory header */}
      <UserProvider>
        {/* <Sidebar/>
      <Nav /> */}

        {/* /add footer room reservation  */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/transportHome" element={<TransportHome />} />
          <Route path="/addtranport" element={<Addtranport />} />
          <Route path="/addcomplaints" element={<ComplaintForm />} />
          <Route path="/allcomplaints" element={<ComplaintsView />} />
          <Route path="/reply-complaint/:id" element={<ReplyComplaint />} />
          <Route path="/feedBackDetail/create" element={<CreateADFeedBack />} />
          <Route path="/FeedBackDetails" element={<FeedBackDetails />} />
          <Route
            path="/feedBackDetail/details/:id"
            element={<ViewADFeedBack />}
          />
          <Route
            path="/feedBackDetail/edit/:id"
            element={<UpdateADFeedBack />}
          />
          <Route
            path="/feedBackDetail/delete/:id"
            element={<DeleteADFeedBack />}
          />
          <Route path="/AftRegDetails" element={<AfterFeedBack />} />
          <Route path="/explore-menu" element={<ExploreMenu />} />
          {/* ############################################## */}
          <Route path="/in" element={<Homein />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/product-page" element={<ProductPage />} />

          <Route path="/product/:productSlug" element={<PostProduct />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />

          {/* <Route element={<PrivateRoute />} /> */}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-summary" element={<Ordersummary />} />
          <Route path="/order-pay-success" element={<CheckoutSuccess />} />
          {/* <Route /> */}

          {/* <Route element={<OnlyAdminPrivateRoute />}> */}
          <Route path="/addproduct" element={<AddProducts />} />
          {/* </Route> */}
          <Route path="/transportHome" element={<TransportHome />} />
          <Route path="/addtranport" element={<Addtranport />} />
          <Route path="/addcomplaints" element={<ComplaintForm />} />
          <Route path="/allcomplaints" element={<ComplaintsView />} />
          <Route path="/reply-complaint/:id" element={<ReplyComplaint />} />
          <Route path="/feedBackDetail/create" element={<CreateADFeedBack />} />
          <Route path="/FeedBackDetails" element={<FeedBackDetails />} />
          <Route
            path="/feedBackDetail/details/:id"
            element={<ViewADFeedBack />}
          />
          <Route
            path="/feedBackDetail/edit/:id"
            element={<UpdateADFeedBack />}
          />
          <Route
            path="/feedBackDetail/delete/:id"
            element={<DeleteADFeedBack />}
          />
          <Route path="/AftRegDetails" element={<AfterFeedBack />} />
          <Route path="/explore-menu" element={<ExploreMenu />} />

          {/* Routes with Sidebar and Navbar */}
          <Route
            path="/update-product/:productId"
            element={<UpdateProducts />}
          />
          <Route path="/update-order/:orderId" element={<UpdateOrder />} />

          {/* Routes with Sidebar and Navbar */}
          <Route
            path="/add"
            element={
              <>
                <Navbar />
                <div style={{ display: "flex" }}>
                  <Sidebar />
                  <div style={{ flexGrow: 1 }}>
                    <Addadmin />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/list"
            element={
              <>
                <Navbar />
                <div style={{ display: "flex" }}>
                  <Sidebar />
                  <div style={{ flexGrow: 1 }}>
                    <AdminList />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Navbar />
                <div style={{ display: "flex" }}>
                  <Sidebar />
                  <div style={{ flexGrow: 1 }}>
                    <AllOrders />
                  </div>
                </div>
              </>
            }
          />
          <Route path="/room-reservation" element={<Home />} />
          <Route path="/mainhome" element={<HomeCard />} />
          <Route path="/Accomodation" element={<Accomodation />} />
          <Route path="/checkout" element={<CheckOut />} />

          <Route path="/employee" element={<EmployeeManagementPage />} />
          <Route path="/leaveTracking" element={<LeaveTrackingPage />} />
          <Route path="/inventory" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<AttendanceManagementPage />} />
        </Routes>

        <ToastContainer />
      </UserProvider>
      {/* inventory header */}
      <Footer />
      {/* inventory header */}
    </>
  );
}

export default App;
