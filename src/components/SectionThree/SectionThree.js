import React from "react";
import "./SectionThree.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <div className="sectionHeader">
        <h1>Tailored Benefits That Grow Alongside You</h1>
        <p>
          Consolidating your investments with Wealthsimple unlocks exclusive
          benefits and partner rewards, giving you even greater access to what
          matters.
        </p>
        <NavLink to="/plans" className="btn-link">See All Benefits</NavLink>
      </div>
      <div className="cardContainer">
        <div className="benefitCard premiumCard">
          <p className="inAset">$100,000 in assets</p>
          <div className="premium">
            <h2>Premium</h2>
            <FaArrowRight />
          </div>
          <div className="features">
            <p> 0.4% management fees on managed investing accounts</p>
            <p> 3.25% interest on your Cash account</p>
            <p> Goal setting with an advisor</p>
          </div>
        </div>

        <div className="benefitCard generationCard">
          <p className="inAset">$500,000 in assets</p>
          <div className="premium">
            <h2>Generation</h2>
            <FaArrowRight />
          </div>
          <div className="features">
            <p> 0.2%–0.4% management fees on managed investing accounts</p>
            <p> 3.75% interest on your Cash account</p>
            <p> Dedicated team of advisors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
