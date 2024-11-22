import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Congratulatory icon
import "./Verify.css";
import Loader from "../../../components/Loader/Loader";
import { RESET, verifyUser } from "../../../redux/features/auth/authSlice";
import ButtonLoader from "../../../components/ButtonLoader/ButtonLoader";

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { verificationToken } = useParams();
  const { isLoading } = useSelector((state) => state.auth);

  const verifyAccount = async () => {
    // Dispatch the verification action
    await dispatch(verifyUser(verificationToken));
    await dispatch(RESET());

    // Navigate to the dashboard
    navigate("/dashboard");

    // Refresh the page after navigation
    setTimeout(() => {
      window.location.reload();
    }, 0); // Immediate refresh
  };

  return (
    <div className="verifyAccount-container">
      <div className="verifyAccount-card">
        <FaCheckCircle className="verify-icon animated-icon" />
        <h2>Account Verification!</h2>
        <p>
          Your account will be verified, once you click the button below to
          proceed!
        </p>
        <ButtonLoader
          onClick={verifyAccount}
          className="verify-button"
          isLoading={isLoading}
        >
          Verify Email
        </ButtonLoader>
      </div>
    </div>
  );
};

export default Verify;
