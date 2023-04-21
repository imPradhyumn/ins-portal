import React from "react";
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import ProfilePicture from "../assets/profile-pic.jpg";

export default function NavBar() {
  return (
    <>
      <nav className="navbar mr-auto ml-auto fixed-top sticky-top navbar-expand navbar-light bg-light nav-flex-box">
        {/*Left Part*/}
        <div className="nav-logos">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h5 className="nav-link active">
                <span>•</span>lns<span>•</span>
              </h5>
            </li>
            <li className="nav-item">
              <Link to="/">
                <h5 id="portal-name" className="nav-link active">
                  Agent's Portal
                </h5>
              </Link>
            </li>
          </ul>
        </div>
        {/*Mid Part*/}
        <div className="nav-search">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <form className="d-flex">
            <input
              className="form-control me-2 me-auto shadow-none border-0"
              type="search"
              placeholder="Search keyword"
              aria-label="Search"
            />
          </form>
        </div>

        {/*Right Part*/}
        <div className="nav-profile">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="xyz">
                <i
                  class="fa-regular fa-bell"
                  style={{
                    marginRight: "10px",
                    fontSize: "20px",
                    color: "rgba(34,173,219,255)",
                  }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <img
                className="nav-link profile-pic"
                src={ProfilePicture}
                alt=""
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
