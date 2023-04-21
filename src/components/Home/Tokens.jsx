import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Tokens.css";

export default function Tokens() {
  const arr = [4, 6, 8, 2, 12];

  function* colorPicker() {
    yield "#0aa1c1";
    yield "#0393d6";
    yield "#03c6d6";
    yield "#ff8d5c";
  }

  let colorPickerGen = colorPicker();

  const [btnVisibility, setVisibility] = useState("hidden");
  const [btnPosition, setPosition] = useState("absolute");

  function scrollLeft() {
    let tag = document.getElementById("card-scroller");
    tag.scrollLeft += 100;
    if (tag.scrollLeft > 0) {
      setVisibility("visible");
      setPosition("relative");
    }
  }

  function scrollRight() {
    let tag = document.getElementById("card-scroller");
    tag.scrollLeft -= 100;
    if (tag.scrollLeft <= 0) {
      setVisibility("hidden");
      setPosition("absolute");
    }
  }

  return (
    <div className="cards-container">
      <button
        style={{ visibility: btnVisibility, position: btnPosition }}
        onClick={scrollRight}
        id="backward-slider"
      >
        <i className="fa-solid fa-less-than"></i>
      </button>
      <div id="card-scroller" className="cards">
        {arr.map((ele) => {
          if (ele.toString().length === 1)
            ele = ele.toString().padStart(2, "0");
          return (
            <div className="token-card card">
              <Link to="/new-leads">
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      display: "inline-block",
                      color: colorPickerGen.next().value,
                    }}
                  >
                    {ele}
                  </h5>
                  <h4 style={{ display: "inline-block", marginLeft: "14px" }}>
                    04
                  </h4>
                  <p className="card-text" style={{ color: "#255155" }}>
                    New Leads
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/*Buttons to scroll*/}

      <button onClick={scrollLeft} id="forward-slider">
        <i className="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
}
