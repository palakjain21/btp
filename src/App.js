import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddDevices from "./pages/AddUsers";
import "./App.css";
import Admins from "./pages/Admins";
import AddUsers from "./pages/AddUsers";
import ManageUsers from "./pages/ManageUsers";
import ManageDevices from "./pages/ManageDevices";
// import getWeb3 from "./web3";
import Web3 from "web3";
function App() {
  const [web3, setWeb3] = React.useState(null);
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admins />} />

        <Route path="/addDevices" element={<AddDevices />} />
        <Route path="/addUsers" element={<AddUsers />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/manageDevices" element={<ManageDevices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
