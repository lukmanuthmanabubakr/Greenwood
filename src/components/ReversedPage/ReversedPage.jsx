import React from "react";
import { MdErrorOutline } from "react-icons/md";
import "./ReversedPage.css";

const ReversedPage = () => {
  return (
    <div className="withdrawal-container">
      <div className="withdrawal-card">
        <div className="withdrawal-icon">
          <MdErrorOutline size={64} />
        </div>
        <h2>Withdrawal Reversed</h2>
        <p>
          Your recent withdrawal request has been <strong>reversed</strong>, and the funds have been returned to your Greenwood account.
        </p>
        <p>
          If you believe this is a mistake, please contact support for further&nbsp;clarification.
        </p>
      </div>
    </div>
  );
};

export default ReversedPage;
