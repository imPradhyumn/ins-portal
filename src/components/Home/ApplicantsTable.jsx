import React, { useState } from "react";
import "../../css/ApplicantsTable.css";
import { Link } from "react-router-dom";

export default function ApplicantsTable(props) {
  let clr = "white";

  let tbodyStyle;
  var filteredData = [];

  function filterData(keysRequire) {
    //extract only require keys
    props.data.forEach((obj) => {
      let temp = {};
      for (let key of keysRequire) {
        if (Object.keys(obj).includes(key)) temp[key] = obj[key];
      }
      filteredData.push(temp);
    });
  }

  if (props.tableFull === false) {
    tbodyStyle = { height: "230px" };
    filterData(props.keysRequire);
  } else {
    tbodyStyle = { height: "340px" };
    filterData(props.keysRequire);
  }

  console.log(filteredData);

  let count = 0;

  return (
    <div className="applicants-table overflow-hidden">
      <table>
        <thead>
          <tr>
            {props.tableHeaders.map((headerName) => {
              return <th>{headerName}</th>;
            })}
          </tr>
        </thead>
        <div className="tbody">
          <tbody style={tbodyStyle}>
            {filteredData.map((obj) => {
              count++;
              if (count % 2 === 0) clr = "rgba(242,248,251,255)";
              else clr = "white";
              let dataKeys = Object.keys(filteredData[0]);
              return (
                <tr style={{ backgroundColor: clr }}>
                  {dataKeys.map((key) => {
                    if (key == "id") return;
                    if (key === "leadStage") {
                      return (
                        <td key={obj["id"]}>
                          {obj[key]}
                          {props.mailBtn}
                        </td>
                      );
                    }

                    if (props.tableFull === false) {
                      return <td key={obj["id"]}>{obj[key]}</td>;
                    } else {
                      return (
                        <Link
                          key={obj["id"]}
                          to={props.linkToNavigate + "/" + obj["id"]}
                        >
                          <td>{obj[key]}</td>
                        </Link>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </div>
      </table>
    </div>
  );
}
