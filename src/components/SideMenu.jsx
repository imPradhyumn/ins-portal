import React from "react";
import "../css/SideMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SideMenuToggle from "./SideMenuToggle";

export default function SideMenu() {
  const [darkModeStyle, setDarkModeStyle] = useState({ float: "left" });

  const darkModeBtn = (
    <div onClick={darkModeToggle} id="dark-mode-btn">
      <i
        style={darkModeStyle}
        className="fa-solid fa-circle"
        id="dark-mode-icon"
      ></i>
    </div>
  );

  const icons = [
    <i class="fa-solid fa-bars"></i>,
    <i class="fa-solid fa-circle"></i>,
    <i class="fa-solid fa-chart-column"></i>,
    <i class="fa-solid fa-envelope"></i>,
    <i class="fa-solid fa-pencil"></i>,
    <i class="fa-solid fa-users"></i>,
    <i class="fa-solid fa-book"></i>,
    <i class="fa-brands fa-twitter"></i>,
    <i class="fa-solid fa-gear"></i>,
    <i class="fa-solid fa-right-from-bracket" id="icon-flipped"></i>,
  ];

  const links = ["/", "product-catalogue"];
  let count = 0;

  const [sideMenuClass, setSideMenuClass] = useState("hide-side-menu");

  const btnStyle = {
    backgroundColor: "#fff",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    border: "1px solid rgba(0, 0, 0, 0.125)",
    color: "rgba(27, 171, 219, 255)",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "50%",
    fontWeight: "bold",
    padding: "0.5rem 0.7rem",
  };

  function showSideMenu() {
    setSideMenuClass("show-side-menu");
  }

  function hideSideMenu() {
    setSideMenuClass("hide-side-menu");
  }

  function darkModeToggle(e) {
    if (e.target.style.float === "right") {
      setDarkModeStyle({ float: "left" });
      document.getElementsByTagName("html")[0].style.filter = "none";
      //document.getElementsByClassName("event-profile-pic").
    } else {
      setDarkModeStyle({ float: "right" });
      document.getElementsByTagName("html")[0].style.filter =
        "invert(100%) hue-rotate(180deg)";
    }
  }

  return (
    <>
      <div className="side-menu">
        <ul className="nav flex-column">
          <li id="side-menu-toggle-btn" onClick={showSideMenu}>
            <i class="fa-solid fa-greater-than" style={btnStyle}></i>
          </li>
          {icons.map((icon) => {
            return (
              <Link to={links[count++]}>
                <li className="nav-item nav-item-icon">{icon}</li>
              </Link>
            );
          })}
          <li>{darkModeBtn}</li>
        </ul>
      </div>
      <SideMenuToggle
        sideMenuClass={sideMenuClass}
        icons={icons}
        btnStyle={btnStyle}
        hideSideMenu={hideSideMenu}
        darkModeBtn={darkModeBtn}
      />
    </>
  );
}
