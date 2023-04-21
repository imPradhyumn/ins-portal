import React from "react";
import "../css/SideMenu.css";
import { Link } from "react-router-dom";

export default function SideMenuToggle(props) {
  const iconName = [
    "Dashboard",
    "Product Catalogue",
    "Lead Management",
    "Campaign",
    "Application",
    "My Contracts",
    "Claims",
    "Twitter",
    "Settings",
    "Logout",
  ];

  let count = 0;
  return (
    <div id="side-menu-lg" className={props.sideMenuClass}>
      <button onClick={props.hideSideMenu} className="btn" id="close-btn">
        X
      </button>
      <ul className="nav flex-column">
        {props.icons.map((icon) => {
          return (
            <Link to="/" className="border-right-glow">
              <li className="nav-item side-menu-icon-name">
                {icon}
                &nbsp;&nbsp;
                {iconName[count++]}
              </li>
            </Link>
          );
        })}

        <li style={{ margin: "14px 18px" }} className="nav-item">
          {props.darkModeBtn}
        </li>
      </ul>
    </div>
  );
}
