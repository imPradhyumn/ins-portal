import React from "react";

export default function Quotation() {
  return (
    <div id="quotation-showcase">
      <div className="details-container card">
        <div className="details-left-section">
          <div>
            <h6 className="title-key">Quotation Reference</h6>
            <h6 className="title-value">GRH/3345</h6>
          </div>
          <div>
            <h6 className="title-key">Product</h6>
            <h6 className="title-value">CG Protect</h6>
          </div>
          <button className="btn btn-sm">VIEW BENEFITS</button>
        </div>

        <div className="details-right-section">
          <div>
            <h6 className="title-key">Premium</h6>
            <h6 className="title-value">$70 per week</h6>
          </div>
          <div>
            <h6 className="title-key">Sum Insured Upto</h6>
            <h6 className="title-value">CG Protect</h6>
          </div>
        </div>
      </div>

      <div id="applicant-details" className="details-container card">
        <div className="details-left-section">
          <h6 style={{ fontWeight: "bold" }}>Applicant's Details</h6>
          <div>
            <h6 className="title-key">Applicant's Name</h6>
            <h6 className="title-value">John Smith</h6>
          </div>
          <div>
            <h6 className="title-key">Phone Number</h6>
            <h6 className="title-value">+91-9876543216</h6>
          </div>
          <div>
            <h6 className="title-key">Consumes Tobacco</h6>
            <h6 className="title-value">Yes</h6>
          </div>
        </div>

        <div className="details-mid-section">
          <div>
            <h6 className="title-key">Address</h6>
            <h6 className="title-value">156, Bangalore</h6>
          </div>
          <div>
            <h6 className="title-key">Gender</h6>
            <h6 className="title-value">Male</h6>
          </div>
          <div>
            <h6 className="title-key">Age</h6>
            <h6 className="title-value">24</h6>
          </div>
        </div>

        <div className="details-right-section">
          <div>
            <h6 className="title-key">Email</h6>
            <h6 className="title-value">xyz@gmail.com</h6>
          </div>
          <div>
            <h6 className="title-key">Consumes Alcohol</h6>
            <h6 className="title-value">Yes</h6>
          </div>
          <div>
            <h6 className="title-key">D.O.B</h6>
            <h6 className="title-value">04/04/1998</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
