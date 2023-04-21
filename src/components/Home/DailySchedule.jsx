import React from "react";
import "../../css/DailySchedule.css";
import { useState, useEffect } from "react";

let today = new Date();
let day = String(today.getDate()).padStart(2, "0");
let mon = String(today.getMonth() + 1).padStart(2, "0");
let year = today.getFullYear();
let todayDateString = year + "-" + mon + "-" + day;

export default function DailySchedule() {
  const arr1 = [1, 2];

  useEffect(() => {
    updateDayCards(today);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const [selectedDate, setSelectedDate] = useState(todayDateString);

  const [next5Days, setNext6Days] = useState([]);

  function getDayAndDate(inputDate) {
    let dateTimeObject = new Date(inputDate);
    let dayDate = String(dateTimeObject.getDate()).padStart(2, "0");
    let dayName = dateTimeObject.toLocaleString("en-us", { weekday: "long" });
    return { dayDate, dayName };
  }

  function updateDayCards(datePicked) {
    let dateChosen = new Date(datePicked);
    let result = [];
    for (let i = 1; i <= 6; i++) {
      let nextDay = dateChosen.setDate(dateChosen.getDate() + 1);
      const res = getDayAndDate(nextDay);
      result = [...result, res];
    }
    setNext6Days(result);
  }

  return (
    <div className="card schedule-card" style={{ borderRadius: "12px" }}>
      <div className="header-part">
        <h6 className="card-heading">Today's Schedule</h6>
        <input
          id="date-picker"
          type="date"
          defaultValue={todayDateString}
          onChange={(e) => {
            updateDayCards(e.target.value);
          }}
        />
      </div>
      {/*day-picker-section*/}

      <div className="day-picker-section">
        {next5Days.map((ele) => {
          return (
            <div className="card day-card" style={{ width: "fit-content" }}>
              <div className="card-body card-body-specific">
                <span style={{ fontWeight: "bold" }}>
                  {ele.dayDate}
                  <br />
                  <span
                    value="g"
                    style={{ fontWeight: "normal", fontSize: "16px" }}
                  >
                    {ele.dayName.substring(0, 3)}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/*scheduled-items-section*/}
      <div className="scheduled-items-section">
        {arr1.map(() => {
          return (
            <div className="scheduled-item-container">
              <div className="scheduled-item-details">
                <h6 className="scheduled-item-title">
                  Meeting with Ron Harris
                </h6>
                <h6
                  style={{ fontSize: "14px", color: "rgba(27, 171, 219, 255)" }}
                >
                  4:00 PM
                </h6>
              </div>
              <div className="action-btns">
                <button id="call-btn" className="btn rounded-circle">
                  <i class="fa-solid fa-phone"></i>
                </button>

                <button
                  id="video-call-btn"
                  className="video-call-btn btn rounded-circle"
                >
                  <i class="fa-solid fa-video"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
