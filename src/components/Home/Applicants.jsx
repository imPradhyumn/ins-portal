import React, { useEffect, useState } from "react";
import "../../css/Applicants.css";
import { Link } from "react-router-dom";
import ApplicantsTable from "./ApplicantsTable";

export default function Applicants(props) {
  const tableHeaders = ["#", "Policy Owner", "Prd Type", "Date", "Status"];

  let keysRequire = ["policyId", "policyOwner", "prdType", "date", "status"];

  return (
    <div className="applicants-section card">
      <div className="applicants-header">
        <h6 style={{ color: "rgba(53,64,82,255)" }}>18 New Applicants</h6>
        <div
          style={{
            display: "inline-block",
            marginLeft: "265px",
          }}
        >
          <Link
            to="/total-applications"
            style={{ marginRight: "30px", color: "rgba(46,71,101,255)" }}
          >
            VIEW ALL
          </Link>

          <div className="dropdown" style={{ display: "inline-block" }}>
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
        </div>
      </div>
      <ApplicantsTable
        tableName={"applicantsSmallTable"}
        tableFull={false}
        tableHeaders={tableHeaders}
        data={props.data}
        keysRequire={keysRequire}
      />
    </div>
  );
}
