import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Home from "./pages/foodcart/Home/Home.jsx";
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
// import PrivateRoute from "./Components/PrivateRoute";
import PrivateRoute from "../src/inventry/Components/PrivateRoute.jsx";
import DashBoard from "./inventry//Pages/DashBoard";
import OnlyAdminPrivateRoute from "../src/inventry/Components/OnlyAdminPrivateRoute";
import UpdateProducts from "./inventry//Pages/UpdateProduct";
// import ProductPage from './inventry/Pages/ProductPage';
import Cart from "./inventry/Pages/Cart";
import Ordersummary from "./inventry/Pages/Ordersummary";
import UpdateOrder from "./inventry/Pages/UpdateOrder";
import CheckoutSuccess from "./inventry/Pages/CheckoutSuccess";

import ForgetPassword from "./inventry/Pages/ForgetPassword";
import ResetPassword from "./inventry/Pages/ResetPassword";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <UserProvider>
        <div>
          <Routes>
            <Route path="/transportHome" element={<TransportHome />} />
            <Route path="/addtranport" element={<Addtranport />} />
            <Route path="/addcomplaints" element={<ComplaintForm />} />
            <Route path="/allcomplaints" element={<ComplaintsView />} />
            <Route path="/reply-complaint/:id" element={<ReplyComplaint />} />
            <Route
              path="/feedBackDetail/create"
              element={<CreateADFeedBack />}
            />
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
            <Route path="/" element={<Homein />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/product-page" element={<ProductPage />} />

            <Route path="/product/:productSlug" element={<PostProduct />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route
              path="/resetpassword/:id/:token"
              element={<ResetPassword />}
            />

            <Route element={<PrivateRoute />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-summary" element={<Ordersummary />} />
            <Route path="/order-pay-success" element={<CheckoutSuccess />} />
            <Route />

            <Route element={<OnlyAdminPrivateRoute />}>
              <Route path="/addproduct" element={<AddProducts />} />
              <Route
                path="/update-product/:productId"
                element={<UpdateProducts />}
              />
              <Route path="/update-order/:orderId" element={<UpdateOrder />} />
            </Route>
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
          </Routes>

          <ToastContainer />
        </div>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
