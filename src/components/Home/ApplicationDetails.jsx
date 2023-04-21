import React from "react";
import "../../css/ShowDetails.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import pic from "../../assets/profile-pic.jpg";

export default function ApplicationDetails() {
  const navigate = useNavigate();

  const [applicantData, setApplicantData] = useState("");

  const { id } = useParams();

  async function getApplicantData() {
    const res = await fetch("http://localhost:3004/applicants/" + id);
    res.json().then((obj) => setApplicantData(obj));
  }

  useEffect(() => {
    getApplicantData();
  }, []);

  console.log(applicantData);

  return (
    <div id="details-container">
      <div>
        <button id="back-btn" onClick={() => navigate(-1)} className="btn">
          {"<"}
        </button>
        <div id="details-title">Application Details</div>
      </div>

      <div id="details-card" className="card">
        <div id="details-card-header">
          <div id="basic-details">
            <img id="display-picture" src={pic} alt="Person" />
            <div id="name-num">
              <h5 id="name">John Smith</h5>
              <h6 id="phone-number">9057672234</h6>
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

        <div className="details-full">
          <div className="details-left-section">
            <div>
              <h6 className="title-key">Product Name</h6>
              <h6 className="title-value">Corona Kavach</h6>
            </div>
            <div>
              <h6 className="title-key">Email</h6>
              <h6 className="title-value">John.smith@xyz.com</h6>
            </div>
          </div>

          <div className="details-mid-section">
            <div>
              <h6 className="title-key">Life Assured Name</h6>
              <h6 className="title-value">John Smith</h6>
            </div>

            <div>
              <h6 className="title-key">Status</h6>
              <h6 className="title-value">UW Process</h6>
            </div>
          </div>

          <div className="details-right-section">
            <div>
              <h6 className="title-key">Address</h6>
              <h6 className="title-value">1533, Mccandless, Miliptas</h6>
            </div>

            <div>
              <h6 className="title-key">Submission Date</h6>
              <h6 className="title-value">01/02/2014</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
