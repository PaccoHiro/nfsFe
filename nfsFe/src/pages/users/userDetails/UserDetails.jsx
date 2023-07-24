import Card from "../../../components/card/Card";
import Chart from "../../../components/chart/Chart";
import SingleDetail from "../../../components/singleDetail/singleDetail";
import TabList from "../../../components/table/Table";
import lastSalesData from "../../../helpers/dataSource/data";
import { dataDetailUser } from "../../../helpers/dataSource/dataDetailUser";
import "./userDetails.scss";

const UserDetails = () => {
  return (
    <div className="userDetails">
      <div className="wrapper">
        <div className="left">
          <SingleDetail data={dataDetailUser} />
        </div>
        <div className="right">
          <div className="top">
            <TabList data={lastSalesData} />
          </div>
          <div className="bottom">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
/* import React from "react";
import "./userDetails.scss";

const UserPage = () => {
  return (
    <div className="user-page">
      <div className="user-profile">
        <img
          className="profile-picture"
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
        <div className="user-info">
          <h2>Full Name</h2>
          <p>Email: user@example.com</p>
          <p>Username: user123</p>
        </div>
      </div>

      <div className="user-navigation">
        <ul>
          <li>Account Details</li>
          <li>Security & Privacy</li>
          <li>Settings & Preferences</li>
          <li>Access & Permissions</li>
          <li>Usage Statistics & Analytics</li>
          <li>Support & Help</li>
          <li>Integrations & API</li>
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
 */
