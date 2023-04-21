import React, { useEffect } from "react";
import ApplicantsTable from "./ApplicantsTable";
import FilterButtons from "../FilterButtons";
import { useNavigate } from "react-router";
import "../../css/ApplicantsTableFull.css";

export default function TotalApplications(props) {
  const navigate = useNavigate();

  let keysRequire = [
    "id",
    "policyOwner",
    "lifeInsured",
    "prdType",
    "applicationNo",
    "date",
    "sa",
    "status",
  ];

  const tableHeaders = [
    "Policy Owner",
    "Life Insured",
    "Prd Type",
    "Application No.",
    "Date",
    "SA",
    "Status",
  ];

  const linkToNavigate = "/application-details";

  const filterBtns = ["UW Progress", "Submitted", "Customer to Confirm"];
  return (
    <div className="total-applications-container">
      <div>
        <button id="back-btn" onClick={() => navigate(-1)} className="btn">
          {"<"}
        </button>
        <div id="total-applications-title">Total Applications</div>
      </div>

      <div className="filter-btns">
        <FilterButtons filterBtns={filterBtns} />
      </div>

      <div className="applicants-table-full card">
        <ApplicantsTable
          tableFull={true}
          tableName={"totalApplications"}
          tableHeaders={tableHeaders}
          data={props.data}
          keysRequire={keysRequire}
          linkToNavigate={linkToNavigate}
          dataName={"applicants"}
        />
      </div>
    </div>
  );
}
