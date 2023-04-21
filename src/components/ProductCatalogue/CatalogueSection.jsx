import React from "react";
import "../../css/ProductCatalogue.css";

export default function CatalogueSection() {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div id="catalogue-section">
      <div id="product-catalogue-header">
        <h5>Product Catalogue</h5>
        <label id="product-catalogue-label">
          Select a Product Category to view Plans
        </label>
      </div>

      <div className="nav-search" id="search-section">
        <form className="d-flex">
          <div>
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              className="form-control me-2 me-auto shadow-none border-0"
              type="search"
              id="product-search-box"
              placeholder="Search keyword"
              aria-label="Search"
            />
          </div>
          <button className="btn" id="product-search-btn">
            SEARCH
          </button>
        </form>
      </div>

      {/* Cards */}
      <div id="catalogue-cards-section">
        {arr.map(() => {
          return (
            <div
              className="card catalogue-card"
              style={{ width: "fit-content" }}
            >
              <div className="card-body catalogue-card-body">
                <span>
                  Airplane
                  <br />
                  <span value="g">
                    Travel
                    <br />
                    Insurance
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
