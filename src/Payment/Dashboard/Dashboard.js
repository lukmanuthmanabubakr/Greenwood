import React, { useState } from "react";
import "./Dashboard.css";
import MainDashBoard from "../MainDashBoard/MainDashBoard";
import { BiMenuAltLeft } from "react-icons/bi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaHome, FaInfoCircle, FaServicestack, FaPhoneAlt } from "react-icons/fa";
import DashLink from "../DashLink/DashLink";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  return (
    <div className="dashContainer">
        <DashLink />
    </div>
  );
};

export default Dashboard;
