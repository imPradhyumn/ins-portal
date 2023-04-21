import React from "react";
import BarChart from "../../assets/bar-chart.jpg";
import "../../css/Chart.css";

export default function Chart() {
  return (
    <div className="chart-section card">
      <img id="chart" src={BarChart} alt="" style={{ padding: "2px 10px" }} />
    </div>
  );
}
