import React, { useEffect, useState } from "react";
import "../../css/ProductCatalogue.css";
import ComparisionSection from "./ComparisionSection";

export default function InsurancePlans() {
  const plans = ["CG Protect", "CG Mediclaim", "Covid Care", "Life Care"];
  const [isCheckBoxDisabled, setCheckBoxDisabled] = useState(true);
  const [btnName, setBtnName] = useState("Compare");
  const [isChecked, setIsChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [countCheckedBoxes, setCountCheckedBoxes] = useState(0);

  function handleClick(e) {
    e.target.value === "Compare" ? setBtnName("Cancel") : setBtnName("Compare");
    setCheckBoxDisabled(!isCheckBoxDisabled);
    setIsChecked({
      1: false,
      2: false,
      3: false,
      4: false,
    });
    setCountCheckedBoxes(0);
  }

  function handleCheckBoxClick(e) {
    if (e.target.checked === true && countCheckedBoxes === 2) {
      alert("Only 2 plans could be comapred at a time");
      return;
    }

    if (e.target.checked === false) setCountCheckedBoxes((count) => count - 1);
    else setCountCheckedBoxes((count) => count + 1);

    setIsChecked((prev) => {
      return {
        ...prev,
        [e.target.id]: !isChecked[e.target.id],
      };
    });
  }

  useEffect(() => {
    if (countCheckedBoxes === 2) window.scrollBy(0, 500);
  }, [countCheckedBoxes]);

  let checkBoxId = 1;

  return (
    <div id="insurance-plans-section">
      <div id="insurance-plans-header">
        <h5 style={{ color: "rgba(64,74,91,255)" }}>Health Insurance Plans</h5>
        <label id="insurance-plans-label">
          Select Health Insurance Plans to compare
        </label>
        <button className="btn btn-sm" value={btnName} onClick={handleClick}>
          {btnName}
        </button>
      </div>

      {/* Plans Section */}
      <div id="plans-card-section">
        {plans.map((plan) => {
          return (
            <div className="card card-holder" style={{ width: "18rem" }}>
              <div className="card" style={{ backgroundColor: "#eaf6fa" }}>
                <div className="card-header">
                  <input
                    onChange={handleCheckBoxClick}
                    type="checkbox"
                    id={checkBoxId}
                    disabled={isCheckBoxDisabled}
                    checked={isChecked[checkBoxId++]}
                  />
                  <div id="card-header-icons">
                    <i class="fab fa-whatsapp"></i>
                    <i class="fas fa-share-alt"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h6
                    style={{ color: "rgba(6,54,64,255)", fontWeight: "bold" }}
                    className="card-title-specific"
                  >
                    {plan}
                  </h6>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="insurance-plans-card-btns">
                <button id="get-quote-btn" className="btn btn-sm">
                  GET QUOTE
                </button>
                <button id="view-btn" className="btn btn-sm">
                  VIEW
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Benefits Section */}
      <div id="benefits-section" style={{ marginTop: "10px" }}>
        <h6>Benefits</h6>
        <ul className="nav flex-column">
          <li className="nav-item">Benefit 1</li>
          <li className="nav-item">Benefit 2</li>
          <li className="nav-item">Benefit 3</li>
        </ul>
      </div>

      {countCheckedBoxes === 2 ? <ComparisionSection /> : null}
    </div>
  );
}
