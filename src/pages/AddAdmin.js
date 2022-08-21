import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./pages.css";

function AddAdmin() {
  const [adminName, setAdminName] = React.useState("");
  const [adminAddress, setAdminAddress] = React.useState("");

  const updateAdminName = (e) => {
    setAdminName(e.target.value);
  };
  const updateAdminAddress = (e) => {
    setAdminAddress(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(adminName, adminAddress);
  };

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
          <div className="lowerPart">
            <form>
              <label>
                <p className="label">Admin Name</p>
                <input
                  className="input"
                  type="text"
                  name="Admin name"
                  value={adminName}
                  placeholder="Admin Name"
                  onChange={updateAdminName}
                  required
                />
              </label>
              <label>
                <p className="label">Admin Address</p>{" "}
                <div className="wrapper">
                  {" "}
                  <input
                    className="input"
                    type="text"
                    name="admin address"
                    value={adminAddress}
                    placeholder="admin address"
                    onChange={updateAdminAddress}
                    required
                  />
                </div>
              </label>

              <div>
                <button className="button" type="submit" onClick={onSubmit}>
                  Add Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
