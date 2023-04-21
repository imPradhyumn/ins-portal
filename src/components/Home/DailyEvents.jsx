import React from "react";
import "../../css/DailyEvents.css";
import EmailWishes from "./EmailWishes";

export default function DailyEvents() {
  const arr = [1, 2];
  return (
    <div className="card events-card" style={{ borderRadius: "12px" }}>
      <div className="event-header-part">
        <h6 className="card-heading">Daily Events</h6>
        <i id="event-logo" className="fa-regular fa-user"></i>
      </div>

      <div className="event-items-section">
        {arr.map(() => {
          return (
            <div className="event-item-container">
              <div className="event-item-details">
                <img
                  className="rounded-circle event-profile-pic"
                  alt=""
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                />
                <img
                  className="rounded-circle event-profile-pic"
                  alt=""
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                />
                <br />
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  +11 Birthdays
                </span>
              </div>

              <button
                type="button"
                className="btn send-wishes-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                SEND WISHES
              </button>
            </div>
          );
        })}
        <EmailWishes id="examplemodal" />
      </div>
    </div>
  );
}
