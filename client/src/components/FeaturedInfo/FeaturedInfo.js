import React from "react";
import "./styles";
import { BsFillCaretDownFill } from "react-icons/bs";
import {
  Featured,
  FeaturedItem,
  FeaturedItemTitle,
  FeaturedMoneyContainer,
  FeaturedMoneyRate,
} from "./styles";

const FeaturedInfo = () => {
  return (
    <Featured>
      <FeaturedItem>
        <FeaturedItemTitle>Market value</FeaturedItemTitle>
        <FeaturedMoneyContainer>
          <span className="featuredMoney">$9,945.23</span>
        </FeaturedMoneyContainer>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedItemTitle>Portfolio cost</FeaturedItemTitle>
        <FeaturedMoneyContainer>
          <span className="featuredMoney">$9,845.23</span>
        </FeaturedMoneyContainer>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedItemTitle>Total Return</FeaturedItemTitle>
        <FeaturedMoneyContainer>
          <span className="featuredMoney">$845.23</span>
          <FeaturedMoneyRate>
            <BsFillCaretDownFill />
            -0.04%
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
      </FeaturedItem>
    </Featured>
  );
};

export default FeaturedInfo;
