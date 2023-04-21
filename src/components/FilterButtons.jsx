import React from "react";

export default function FilterButtons(props) {
  const btnStyle = {
    borderRadius: "12px",
    margin: "0 0.5rem",
  };

  return (
    <>
      <div
        className="dropdown"
        style={{ marginRight: "0.6rem", display: "inline-block" }}
      >
        <button
          className="btn btn-dropdown-specific btn-sm dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          All Policies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="x=">
              Health
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="x=">
              Documents
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="x=">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      {props.filterBtns.map((name) => {
        return (
          <button
            type="button"
            class="btn btn-sm btn-outline-info"
            style={btnStyle}
          >
            {name}
          </button>
        );
      })}
    </>
  );
}
