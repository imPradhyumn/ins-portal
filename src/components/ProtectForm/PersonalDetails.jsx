import React, { useState } from "react";
import "../../css/ProtectForm.css";

export default function PersonalDetails() {
  const dependents = ["Spouse", "Mother", "Father", "Child", "Other"];

  const [smokeBtnIsChecked, toggleSmokeRadioInput] = useState({
    yesBtn: false,
    noBtn: false,
  });

  const [alcoholBtnIsChecked, toggleAlcoholRadioInput] = useState({
    yesBtn: false,
    noBtn: false,
  });
  const [smokeBtnFocusedClass, setSmokeBtnFocusedClass] = useState({
    yesBtn: "",
    noBtn: "",
  });

  const [alcoholBtnFocusedClass, setAlcoholBtnFocusedClass] = useState({
    yesBtn: "",
    noBtn: "",
  });

  function handleAlcoholBtnClick(e) {
    if (e.target.id === "alcohol-yes-btn") {
      toggleAlcoholRadioInput({ yesBtn: true, noBtn: false });
      setAlcoholBtnFocusedClass({ yesBtn: "btn-focused", noBtn: "" });
    } else {
      toggleAlcoholRadioInput({ yesBtn: false, noBtn: true });
      setAlcoholBtnFocusedClass({ noBtn: "btn-focused", yesBtn: "" });
    }
  }

  function handleSmokeBtnClick(e) {
    if (e.target.id === "smoke-yes-btn") {
      toggleSmokeRadioInput({ yesBtn: true, noBtn: false });
      setSmokeBtnFocusedClass({ yesBtn: "btn-focused", noBtn: "" });
    } else {
      toggleSmokeRadioInput({ yesBtn: false, noBtn: true });
      setSmokeBtnFocusedClass({ noBtn: "btn-focused", yesBtn: "" });
    }
  }

  return (
    <>
      <div className="personal-details-form">
        <div className="row row-specific">
          <div className="col col-specific">
            <label for="firstName">First Name</label>
            <input
              type="text"
              className="form-control form-control-sm input-specific input-specific"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="col col-specific">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              className="form-control form-control-sm input-specific"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row row-specific">
          <div className="col col-specific">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control form-control-sm input-specific"
              id="phone"
              placeholder="Phone number"
            />
          </div>
          <div className="col col-specific">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control form-control-sm input-specific"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row row-specific">
          <div className="col col-specific">
            <label for="dob">Date of Birth</label>
            <input
              type="date"
              className="form-control form-control-sm input-specific"
              id="dob"
              placeholder="DOB"
            />
          </div>
          <div className="col col-specific">
            <label for="pincode">Pincode</label>
            <input
              type="text"
              className="form-control form-control-sm input-specific"
              id="pincode"
              pattern="[0-9]{4}"
              placeholder="Pincode"
              maxLength={6}
            />
          </div>
        </div>

        {/* Gender Section*/}
        <div className="gender-section row-specific">
          <h6>Gender</h6>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label className="form-check-label" for="inlineRadio3">
              Transgender
            </label>
          </div>
        </div>

        {/* Smoke Section */}
        <div className="row row-specific">
          <div className="col">
            Do you smoke?
            <div id="smoke-btn">
              <button
                className={"btn btn-specific " + smokeBtnFocusedClass["yesBtn"]}
                id="smoke-yes-btn"
                onClick={handleSmokeBtnClick}
              >
                Yes
              </button>
              <input
                type="radio"
                name="smoke"
                value="yes"
                checked={smokeBtnIsChecked["yesBtn"]}
              />
              <button
                className={"btn btn-specific " + smokeBtnFocusedClass["noBtn"]}
                onClick={handleSmokeBtnClick}
                id="smoke-no-btn"
              >
                No
              </button>
              <input
                type="radio"
                name="smoke"
                value="no"
                checked={smokeBtnIsChecked["noBtn"]}
              />
            </div>
          </div>
          <div className="col">
            Do you consume alcohol?
            <div id="alcohol-btn">
              <button
                className={
                  "btn btn-specific " + alcoholBtnFocusedClass["yesBtn"]
                }
                onClick={handleAlcoholBtnClick}
                id="alcohol-yes-btn"
              >
                Yes
              </button>
              <input
                type="radio"
                name="alcohol"
                className="radio-btns"
                value="yes"
                checked={alcoholBtnIsChecked["yesBtn"]}
              />
              <button
                className={
                  "btn btn-specific " + alcoholBtnFocusedClass["noBtn"]
                }
                onClick={handleAlcoholBtnClick}
                id="alcohol-no-btn"
              >
                No
              </button>
              <input
                type="radio"
                name="alcohol"
                className="radio-btns"
                value="no"
                checked={alcoholBtnIsChecked["noBtn"]}
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="row row-specific">
          <div className="col">
            <label for="address-input">Pincode</label>
            <textarea
              className="form-control"
              id="address-input"
              col="30"
              row="50"
              placeholder="Address"
            ></textarea>
          </div>
          <div className="col" style={{ visibility: "hidden" }}></div>
        </div>
        <div className="row row-specific">
          <label>Add Dependents</label>
          <div className="dependents-container">
            <div className="dependents-cards">
              {dependents.map((ele) => {
                return (
                  <button className="card btn dependent-card">{ele}</button>
                );
              })}
            </div>
            {/* <div className="dependents-labels">
              {dependents.map((ele) => {
                return <h6 className="dependent-label-name">{ele}</h6>;
              })}
            </div> */}
            <button id="add-dependent-btn" className="btn">
              + ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
