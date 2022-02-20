import React from "react";
import "./styles";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Featured } from "./styles";

const FeaturedInfo = () => {
  return (
    <Featured>
      <div className="featuredItem">
        <span className="featuredItemTitle">Market value</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$9,945.23</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredItemTitle">Portfolio cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$9,845.23</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredItemTitle">Total Return</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$845.23</span>
          <span className="featuredMoneyRate">
            <BsFillCaretDownFill />
            -0.04%
          </span>
        </div>
      </div>
    </Featured>
  );
};

export default FeaturedInfo;
