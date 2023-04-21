import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import pic from "../../assets/profile-pic.jpg";
import "../../css/ShowDetails.css";
import { useParams } from "react-router-dom";

export default function LeadDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [leadData, setLeadData] = useState("");

  async function getLeadData() {
    const res = await fetch("http://localhost:3004/leads/" + id);
    res.json().then((obj) => setLeadData(obj));
  }

  useEffect(() => {
    getLeadData();
  }, []);

  return (
    <div id="details-container">
      {console.log(leadData)}
      <div>
        <button id="back-btn" onClick={() => navigate(-1)} className="btn">
          {"<"}
        </button>
        <div id="details-title">Leads</div>
      </div>

      <div id="details-card" className="card">
        <div id="details-card-header">
          <div id="basic-details">
            <img id="display-picture" src={pic} alt="Person" />
            <div id="name-num">
              <h5 id="name">{leadData.name}</h5>
              <h6 id="phone-number">{leadData.contact}</h6>
            </div>
          </div>
          <div id="contact-btns">
            <button className="btn btn-sm rounded-circle">
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button className="btn btn-sm rounded-circle">
              <i class="fa-solid fa-phone"></i>
            </button>
            <button className="btn btn-sm rounded-circle">
              <i class="fa-solid fa-envelope"></i>
            </button>
          </div>
        </div>

        {/* Details to be */}

        <div className="details-full">
          <div className="details-left-section">
            <div>
              <h6 className="title-key">Product Name</h6>
              <h6 className="title-value">{leadData.product}</h6>
            </div>
            <div>
              <h6 className="title-key">Email</h6>
              <h6 className="title-value">{leadData.email}</h6>
            </div>
          </div>

          <div className="details-mid-section">
            <div>
              <h6 className="title-key">Life Assured Name</h6>
              <h6 className="title-value">{leadData.lifeAssuredName}</h6>
            </div>

            <div>
              <h6 className="title-key">Status</h6>
              <h6 className="title-value">{leadData.status}</h6>
            </div>
          </div>

          <div className="details-right-section">
            <div>
              <h6 className="title-key">Address</h6>
              <h6 className="title-value">{leadData.address}</h6>
            </div>

            <div>
              <h6 className="title-key">Submission Date</h6>
              <h6 className="title-value">{leadData.submissionDate}</h6>
            </div>
          </div>

          <div>
            <button id="send-payment-btn" className="btn btn-sm">
              SEND PAYMENT LINK
            </button>
          </div>
        </div>
      </div>

      {/* 3rd Card */}
      <div
        id="select-lead-status"
        className="card"
        style={{ display: "inline-block" }}
      >
        <h6 id="lead-status-title">Select Lead Status</h6>
        <div id="lead-status-radio-btns">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="contacted"
            />
            <label className="form-check-label" for="inlineRadio1">
              Contacted
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="interested"
            />
            <label className="form-check-label" for="inlineRadio2">
              Interested
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="qualified"
            />
            <label className="form-check-label" for="inlineRadio3">
              Qualified
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="rejected"
            />
            <label className="form-check-label" for="inlineRadio3">
              Rejected
            </label>
          </div>

          <button id="save-btn" className="btn btn-sm">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}
