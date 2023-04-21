import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Home/Dashboard";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import NewLeads from "./components/NewLeads/NewLeads";
import ProtectForm from "./components/ProtectForm/ProtectForm";
import TotalApplications from "./components/Home/TotalApplications";
import ApplicationDetails from "./components/Home/ApplicationDetails";
import LeadDetails from "./components/NewLeads/LeadDetails";
import { useEffect, useState } from "react";
import FetchData from "./fetchData/FetchData";
import ProductCatalogue from "./components/ProductCatalogue/ProductCatalogue";

function App() {
  console.error = () => {};

  const [applicantsData, setApplicantsData] = useState([]);
  const [leadsData, setLeadsData] = useState([]);

  useEffect(() => {
    FetchData("applicants").then((obj) => setApplicantsData(obj));
    FetchData("leads").then((obj) => setLeadsData(obj));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideMenu />

        <Routes>
          <Route path="/" element={<Dashboard data={applicantsData} />} />
          <Route path="/new-leads" element={<NewLeads data={leadsData} />} />
          <Route
            path="total-applications"
            element={<TotalApplications data={applicantsData} />}
          />
          <Route path="/protect-form" element={<ProtectForm />} />
          <Route
            path="/application-details/:id"
            element={<ApplicationDetails />}
          />
          <Route path="/lead-details/:id" element={<LeadDetails />} />
          <Route path="product-catalogue" element={<ProductCatalogue />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
