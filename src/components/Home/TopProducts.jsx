import React from "react";
import "../../css/TopProducts.css";

export default function TopProducts() {
  const names = ["Health Protect Plus", "Covid Shield Plus", "CG Term Life"];
  const soldAmount = [500, 455, 312];
  const progress = ["50%", "25%", "60%"];

  function* progressBarColorPicker() {
    yield "#255155";
    yield "#63d654";
    yield "#efd026";
  }

  const colorPickerGen = progressBarColorPicker();
  let count = 0;
  return (
    <div className="card">
      <div className="header-part">
        <h6>Top selling products</h6>
      </div>

      <div className="card-container">
        <div id="products-name">
          <ul
            className="list-group list-group-flush m-8"
            style={{
              borderBottom: "none",
            }}
          >
            {names.map((name) => {
              return (
                <li key={count++} className="list-group-item card-list">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>

        {/*Progress Bars*/}
        <div className="progress-bars">
          <ul className="list-group list-group-flush">
            {progress.map((percent) => {
              return (
                <li key={count++} className="list-group-item progresss">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: percent,
                        backgroundColor: colorPickerGen.next().value,
                      }}
                      aria-valuenow={percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div id="sold-data">
          <ul className="list-group list-group-flush m-8">
            {soldAmount.map((amt) => {
              return (
                <li key={count++} className="list-group-item card-list">
                  {amt} sold
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
