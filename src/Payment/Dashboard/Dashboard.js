import "./Dashboard.css";
import Notification from '../../components/Notification/Notification';
import DashLink from "../DashLink/DashLink";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { useSelector } from "react-redux";
import NotSubmitKyc from "../../components/NotSubmitKyc/NotSubmitKyc";
import KycPending from "../../components/kycPending/kycPending";
import RejectedKyc from "../../components/RejectedKyc/RejectedKyc";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const isVerified = user?.isVerified;
  const kycNotSubmitted = user?.kycStatus;
  const kycPending = user?.kycStatus;

  useRedirectLoggedOutUser("/login");
  return (
    <div className="dashContainer">
      {isVerified === false && <Notification />}
      {kycNotSubmitted === "Not Submitted" && <NotSubmitKyc />}
      {kycPending === "Pending" && <KycPending />}
      {kycPending === "Rejected" && <RejectedKyc />}
      <DashLink />
    </div>
  );
};

export default Dashboard;
