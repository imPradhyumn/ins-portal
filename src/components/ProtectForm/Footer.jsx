import React from "react";
import "../../css/ProtectForm.css";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.id === "form-back-btn" && props.formPageNo === 1) navigate(-1);
    if (
      (e.target.id === "form-next-btn" || e.target.id === "form-payment-btn") &&
      props.formPageNo === 4
    )
      return;

    if (e.target.id === "form-next-btn") {
      props.setFormPageNo((val) => val + 1);
      props.setFormProgress((val) => val + 25);
    } else {
      props.setFormPageNo((val) => val - 1);
      props.setFormProgress((val) => val - 25);
    }
  };

  return (
    <div className="protect-form-footer">
      <button id="form-back-btn" className="btn btn-sm" onClick={handleClick}>
        BACK
      </button>
      {props.formPageNo === 4 ? (
        <button
          id="form-payment-btn"
          className="btn btn-sm"
          onClick={handleClick}
        >
          SEND PAYMENT LINK
        </button>
      ) : (
        <button id="form-next-btn" className="btn btn-sm" onClick={handleClick}>
          NEXT
        </button>
      )}
    </div>
  );
}
