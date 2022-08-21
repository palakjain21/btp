import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./pages.css";

function AddUsers() {
  return (
    <div className="App">
      <div className="page">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="logo">
            <h1>IOT device management</h1>
          </div>
          <div className="lowerPart"></div>
        </div>
      </div>
    </div>
  );
}

export default AddUsers;
