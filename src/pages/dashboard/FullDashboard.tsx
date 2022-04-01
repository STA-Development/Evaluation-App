import React from "react";
import SelectBox from "./SelectBox";
import OverviewDashboard from "./DashboardEventActivity/OverviewDashboard";
import TopPerformers from "./TopPerformers";

const FullDashboard = () => {
  return (
    <>
      <SelectBox />
      <OverviewDashboard />
      <TopPerformers />
    </>
  );
};

export default FullDashboard;
