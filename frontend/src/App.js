import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransportHome from "./component/Transport/transportHome";
import Addtranport from "./component/Transport/addtranport";
import ComplaintForm from './complainnts/ComplaintsCreate';
import ComplaintsView from './complainnts/ComplaintsView';
import ReplyComplaint from './complainnts/ReplyComplaint';
import Home from "./roomReservation/Components/Home/Home";
import Nav from "./roomReservation/Components/Nav/Nav";
import Accomodation from './roomReservation/Components/Accomodation/Accomodation'
import CheckOut from './roomReservation/Components/CheckOut/CheckOut';
import Sidebar from './roomReservation/Components/Sidebar/Sidebar';
//juthmini
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Sidebar/>
      <Nav />
        <Routes>
     
          <Route path="/transportHome" element={<TransportHome />} />
          <Route path="/addtranport" element={<Addtranport />} />
          <Route path='/addcomplaints' element={<ComplaintForm/>} />
          <Route path='/allcomplaints' element={<ComplaintsView/>} />
           <Route path='/reply-complaint/:id' element={<ReplyComplaint/>} />
           <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />}/>
          <Route path="/Accomodation" element={<Accomodation />} />
          <Route path="/checkout" element={<CheckOut/>}/>
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
