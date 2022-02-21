import React from "react";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./styles";
import { HomeContainer, HomeWidgets } from "./styles";
import { portfolioData } from "../../dummyData";
import SmallWidget from "../../components/Widgets/WatchlistWidget/WatchlistWidget";
import LargeWidget from "../../components/Widgets/TransactionWidget/TransactionWidget";

const Home = () => {
  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart data={portfolioData} title="Performance" grid dataKey="value" />
      <HomeWidgets>
        <SmallWidget />
        <LargeWidget />
      </HomeWidgets>
    </HomeContainer>
  );
};

export default Home;
