import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path="/attendee" element={<AttendeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
