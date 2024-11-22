
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainDashBoard.css";
import Notification from "../../components/Notification/Notification";
import PaymentLoader from "../PaymentLoader/PaymentLoader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { NameOfUser } from "../../Pages/Profile/UserProfile/UserProfile";
import DashLoader from "../DashLoader/DashLoader";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const GET_ONE_USER = `${BACKEND_URL}api/users`;
export const CHECK_MATURITY = `${BACKEND_URL}api/invest/deposit-maturity`;

const MainDashBoard = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [totalMaturityAmount, setTotalMaturityAmount] = useState(0);
  const [InvestmentBal, setInvestmentBal] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const [showInvestmentBal, setShowInvestmentBal] = useState(false);
  const [showMaturityAmount, setShowMaturityAmount] = useState(false);
  const [loading, setLoading] = useState(true);

  const formatBalance = (balance) => {
    if (balance >= 1_000_000) {
      return `${(balance / 1_000_000).toFixed(1).replace(/\.0$/, "")}M+`;
    } else if (balance >= 100_000) {
      return `${Math.floor(balance / 1_000).toLocaleString()}k`;
    } else if (balance >= 1_000) {
      return `${(balance / 1_000).toFixed(1).replace(/\.0$/, "")}k+`;
    } else {
      return balance.toLocaleString();
    }
  };

  const userDetails = async () => {
    setLoading(true);
    try {
      await axios.get(CHECK_MATURITY);
      const response = await axios.get(`${GET_ONE_USER}/getUser`);
      // console.log("Full Response:", response.data);

      setName(response.data.name);
      setBalance(response.data.balance);
      setInvestmentBal(response.data.investmentBalance);
      setTotalMaturityAmount(response.data.totalMaturityAmount);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userDetails();
  }, []);

  useRedirectLoggedOutUser("/login");

  return (
    <div className="mainDashBoard">
      <div className="mainDashBoardContainer">
        <div className="welName">
          <h2>Welcome Back,</h2>
          <p>{loading ? <DashLoader /> : <NameOfUser />}</p>
        </div>
        <div className="balance">
          {/* Deposit Balance */}
          <span
            className="depoSpan"
            onClick={() => setShowBalance(!showBalance)}
          >
            <p className="dBal">Deposit Balance</p>
            <p className="mBal">
              {loading ? (
                <DashLoader />
              ) : showBalance ? (
                `$${formatBalance(balance)}`
              ) : (
                "****"
              )}
            </p>
          </span>
          {/* Total Investment */}
          <span
            className="depoSpan"
            onClick={() => setShowInvestmentBal(!showInvestmentBal)}
          >
            <p className="dBal">Total Investment</p>
            <p className="mBal">
              {loading ? (
                <DashLoader />
              ) : showInvestmentBal ? (
                `$${formatBalance(InvestmentBal)}`
              ) : (
                "****"
              )}
            </p>
          </span>
          {/* Total Profit Collected */}
          <span
            className="depoSpan"
            onClick={() => setShowMaturityAmount(!showMaturityAmount)}
          >
            <p className="dBal">Total Profit Collected</p>
            <p className="mBal">
              {loading ? (
                <DashLoader />
              ) : showMaturityAmount ? (
                `$${formatBalance(totalMaturityAmount)}`
              ) : (
                "****"
              )}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainDashBoard;
