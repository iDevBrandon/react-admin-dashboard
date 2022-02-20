import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./styles";
import { HomeContainer } from "./styles";
import { portfolioData } from "../../dummyData";

const Home = () => {
  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart data={portfolioData} title="Performance" grid dataKey="value" />
    </HomeContainer>
  );
};

export default Home;
