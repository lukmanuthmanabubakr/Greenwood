import React, { useEffect, useState } from "react";
import "./Home.css";
import tradeBtc from "../../Assets/smae-grass.avif";
import { NavLink } from "react-router-dom";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import OurCustomers from "../../components/OurCustomers/OurCustomers";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import BackToTop from "../../BackToTop/BackToTop";

const Home = () => {
  // State to handle loading animation
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div
                className="text-content"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <h1>
                  Empowering Your Financial <span>Growth with</span> Smart
                  Investments
                </h1>
                <p>
                  Secure your financial future with smart investments. Whether
                  you're a beginner or an experienced investor, we offer the
                  tools and resources to help you grow your wealth efficiently
                  and confidently.
                </p>
                <NavLink to="/register" className="dashboard-link">
                  Register
                </NavLink>
              </div>
              <div className="image-content">
                <img src={tradeBtc} alt="Trade Bitcoin" />
              </div>
            </div>
          </div>

          {/* Additional sections */}
          <SectionTwo />
          <SectionThree />
          <OurCustomers />
          <Faq />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default Home;
