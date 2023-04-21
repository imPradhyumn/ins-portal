import React from "react";
import Applicants from "./Applicants";
import Tokens from "./Tokens";
import "../../css/Dashboard.css";
import Chart from "./Chart";
import DailyEvents from "./DailyEvents";
import TopProducts from "./TopProducts";
import DailySchedule from "./DailySchedule";

export default function Dashboard(props) {
  return (
    <>
      <div className="dashboard">
        <h6 id="heading">Dashboard</h6>
        <div className="dashboard-content">
          <div className="mid-board">
            <Tokens />
            <Applicants data={props.data} />
            <Chart />
          </div>
          <div className="right-board">
            <TopProducts />
            <DailySchedule />
            <DailyEvents />
          </div>
        </div>
      </div>
    </>
  );
}
