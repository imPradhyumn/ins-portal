import React from "react";
import "../../css/ProductCatalogue.css";

export default function ComparisionSection() {
  const hospitalAccessList = [
    "Emergency medical evacuation",
    "Access pvt hospital accommodation",
    "Accidental injury benefit",
  ];

  const arr = [1, 2, 3];

  return (
    <div
      id="compare-section"
      className="d-flex flex-row"
      style={{ height: "300px" }}
    >
      {arr.map(() => {
        return (
          <div className="me-3">
            <h5>COVERAGE</h5>
            <div className="card mt-2">
              <div className="card-header card-name">Hospital Access</div>
              <ul className="list-group list-group-flush card-list-items">
                {hospitalAccessList.map((ele) => {
                  return <li className="list-group-item">{ele}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
