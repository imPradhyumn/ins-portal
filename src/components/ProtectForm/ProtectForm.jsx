import React, { useState } from "react";
import "../../css/ProtectForm.css";
import Documents from "./Documents";
import Footer from "./Footer";
import IncomeDetails from "./IncomeDetails";
import PersonalDetails from "./PersonalDetails";
import ProgressTracker from "./ProgressTracker";
import Quotation from "./Quotation";

export default function ProtectForm() {
  const [formProgress, setFormProgress] = useState(25);
  const [formPageNo, setFormPageNo] = useState(1);

  return (
    <>
      <div className="protect-form-container">
        <h6 id="protect-form-header">CG Protect Form</h6>
        <ProgressTracker formProgress={formProgress} />

        {/*Switch based on page number */}
        {(() => {
          switch (formPageNo) {
            case 1:
              return <PersonalDetails />;
            case 2:
              return <IncomeDetails />;
            case 3:
              return <Documents />;
            case 4:
              return <Quotation />;
            default:
              return null;
          }
        })()}
      </div>
      <Footer
        setFormPageNo={setFormPageNo}
        setFormProgress={setFormProgress}
        formPageNo={formPageNo}
      />
    </>
  );
}
