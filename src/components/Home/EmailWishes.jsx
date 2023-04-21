import React, { useState } from "react";
import "../../css/EmailWishes.css";

function wishAlert(toggleWishAlert) {
  return (
    <div
      id="wish-alert"
      className="position-fixed alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <h6>Your Birthday Wishes Has been sent.</h6>
      <button
        data-bs-dismiss="alert"
        id="okay-thanks-btn"
        className="btn btn-sm"
        onClick={toggleWishAlert}
      >
        OKAY THANKS!
      </button>
      <button
        type="button"
        className="btn-close"
        onClick={toggleWishAlert}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default function SendWishes() {
  const [wordCount, setWordCount] = useState(0);

  const [showWishAlert, setShowWishAlert] = useState(false);

  const toggleWishAlert = () => {
    setShowWishAlert((val) => !val);
  };

  const startWishAlertClosingTimer = () => {
    setTimeout(function () {
      toggleWishAlert();
    }, 3000);
  };

  const onTextAreaChange = (e) => setWordCount(e.target.value.length);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ width: "800px" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                To
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input type="email" className="input-mail-content" />
              <input
                type="text"
                className="input-mail-content"
                style={{ display: "block" }}
                value="Wishing you a very Happy Birthday"
                readOnly
              />
            </div>

            <div className="email-content">
              <h6>Label</h6>
              <h6 style={{ float: "right" }}>{wordCount + "/100"}</h6>
              <div id="text-area">
                <textarea
                  rows="10"
                  cols="55"
                  onChange={onTextAreaChange}
                  placeholder="Hello"
                ></textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary discard-btn"
                data-bs-dismiss="modal"
              >
                DISCARD
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => {
                  toggleWishAlert();
                  startWishAlertClosingTimer();
                }}
                className="send-btn btn btn-primary"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      {showWishAlert === true ? wishAlert(toggleWishAlert) : null}
    </>
  );
}
