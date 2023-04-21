import React from "react";
import "../../css/ProtectForm.css";

export default function Documents() {
  const arr = [1, 2];
  return (
    <div className="documents-form">
      <h6
        id="documents-form-header"
        style={{ color: "grey", fontWeight: "bold" }}
      >
        YOUR PROOF
      </h6>
      <div className="row">
        {arr.map(() => {
          return (
            <div className="col">
              <label className="proof-documents-label">
                Upload Identity Proof
              </label>

              <div className="Neon Neon-theme-dragdropbox">
                <input
                  name="files[]"
                  className="filer_input"
                  multiple="multiple"
                  type="file"
                />
                <div className="Neon-input-dragDrop">
                  <div className="Neon-input-inner">
                    <div className="Neon-input-text">
                      <button className="btn upload-image-btn blue">
                        <i class="upload-image-logo fas fa-images"></i>
                      </button>
                    </div>
                    <h6 class="upload-text">Upload image from gallery</h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
