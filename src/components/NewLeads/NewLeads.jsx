import React from "react";
import "../../css/NewLeads.css";
import ApplicantsTable from "../Home/ApplicantsTable";
import FilterButtons from "../FilterButtons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NewLeads(props) {
  // const data = [
  //   {
  //     name: "Kriti Gupta",
  //     daysSinceLastContacted: "2 days ago",
  //     product: "Team Insurance",
  //     email: "xyz@gmail.com",
  //     contact: "(91) 9824042777",
  //     leadStage: "Contacted",
  //   },
  // ];

  const filterBtns = ["Qualified", "Interested"];

  // const tableHeaders = [
  //   "Policy Owner",
  //   "Life Insured",
  //   "Prd Type",
  //   "Application No.",
  //   "Date",
  //   "SA",
  //   "Status",
  // ];

  const keysRequire = [
    "id",
    "name",
    "daysSinceLastContacted",
    "product",
    "email",
    "contact",
    "leadStage",
  ];

  const tableHeaders = [
    "Name",
    "Last Contacted",
    "Product",
    "Email",
    "Contact",
    "Lead Stage",
  ];

  const mailBtn = (
    <button id="mail-btn" className="btn btn-sm btn-outline-info border-0">
      <i class="far fa-envelope"></i>
    </button>
  );

  const navigate = useNavigate();

  const linkToNavigate = "/lead-details";

  return (
    <div className="new-leads-container">
      <div>
        <button id="back-btn" onClick={() => navigate(-1)} className="btn">
          {"<"}
        </button>
        <div id="new-leads-title">New Leads</div>
      </div>

      <div className="filter-btns">
        <FilterButtons filterBtns={filterBtns} />
        <Link to="/protect-form" id="add-new-lead-btn">
          <button className="btn btn-sm">ADD NEW LEAD</button>
        </Link>
      </div>

      <div className="applicants-table-full card">
        <ApplicantsTable
          tableFull={true}
          tableHeaders={tableHeaders}
          data={props.data}
          mailBtn={mailBtn}
          linkToNavigate={linkToNavigate}
          keysRequire={keysRequire}
          dataName={"leads"}
        />
      </div>
    </div>
  );
}
