import React from "react";

export default function IncomeDetails() {
  return (
    <div className="income-details-form">
      <div id="annual-income">
        {" "}
        <label for="annualIncome">Annual Income</label>
        <input
          type="number"
          className="form-control form-control-sm input-specific"
          id="annualIncome"
          placeholder="Annual Income"
        />
      </div>
      <div>
        <label for="lastName">Government Rebate</label>
        <input
          type="number"
          className="form-control form-control-sm input-specific"
          id="govtRebate"
          placeholder="Government Rebate"
        />
      </div>
      <div>
        <label for="taxRebate">Tax Rebate</label>
        <input
          type="number"
          className="form-control form-control-sm input-specific"
          id="taxRebate"
          placeholder="Tax Rebate"
        />
      </div>
    </div>
  );
}
