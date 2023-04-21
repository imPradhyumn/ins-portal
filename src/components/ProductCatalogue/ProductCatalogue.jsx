import React from "react";
import "../../css/ProductCatalogue.css";
import CatalogueSection from "./CatalogueSection";
import ComparisionSection from "./ComparisionSection";
import InsurancePlans from "./InsurancePlans";

export default function ProductCatalogue() {
  return (
    <div id="product-catalogue">
      <div id="product-catalogue-container">
        <CatalogueSection />
        <InsurancePlans />

        {/* just to give bottom margin a dummy div */}
        <div style={{ height: "20px" }}></div>
        {/*  */}
      </div>
    </div>
  );
}
