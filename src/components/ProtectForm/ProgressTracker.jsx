import React from "react";
import "../../css/ProtectForm.css";

export default function ProgressTracker({ formProgress }) {
  return (
    <>
      <div className="progress-tracker">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: formProgress + "%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div id="progress-details-container">
        <div id="progress-step-number">
          <h6>1</h6>
          <h6>2</h6>
          <h6>3</h6>
          <h6>4</h6>
        </div>
        <div id="progress-step-name">
          <h6>Personal Details</h6>
          <h6>Income Details</h6>
          <h6>Documents</h6>
          <h6>Quotation</h6>
        </div>
      </div>
    </>
  );
}
