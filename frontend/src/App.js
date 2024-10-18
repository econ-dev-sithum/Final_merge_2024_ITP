import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransportHome from "./component/Transport/transportHome";
import Addtranport from "./component/Transport/addtranport";
import ComplaintForm from './complainnts/ComplaintsCreate';
import ComplaintsView from './complainnts/ComplaintsView';
import ReplyComplaint from './complainnts/ReplyComplaint';

import CreateADFeedBack from './pages/Admin/CreateADFeedBack';
import FeedBackDetails from './pages/Admin/FeedBackDetails.jsx';
import ViewADFeedBack from './pages/Admin/ViewADFeedBack.jsx';
import UpdateADFeedBack from './pages/Admin/UpdateADFeedBack.jsx';
import DeleteADFeedBack from './pages/Admin/DeleteADFeedBack.jsx';
import AfterFeedBack from './pages/Admin/AfterFeedBack.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar/Navbar.jsx';
import Sidebar from './component/Sidebar/Sidebar.jsx';
import Addadmin from './pages/Add/Add';
import AdminList from './pages/List/List';
import AllOrders from './pages/Orders/Orders';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/transportHome" element={<TransportHome />} />
          <Route path="/addtranport" element={<Addtranport />} />
          <Route path='/addcomplaints' element={<ComplaintForm/>} />
          <Route path='/allcomplaints' element={<ComplaintsView/>} />
          <Route path='/reply-complaint/:id' element={<ReplyComplaint/>} />

          <Route path='/feedBackDetail/create' element={<CreateADFeedBack />} />
          <Route path='/FeedBackDetails' element={<FeedBackDetails />} />
          <Route path='/feedBackDetail/details/:id' element={<ViewADFeedBack />} />
          <Route path='/feedBackDetail/edit/:id' element={<UpdateADFeedBack />} />
          <Route path='/feedBackDetail/delete/:id' element={<DeleteADFeedBack />} />  
          <Route path='/AftRegDetails' element={<AfterFeedBack />} />


        </Routes>
        
        <hr />
        <div className="app-content">
          <ToastContainer />
          <Routes>
            <Route path="/add" element={<Addadmin />} />
            <Route path="/list" element={<AdminList />} />
            <Route path="/orders" element={<AllOrders />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
