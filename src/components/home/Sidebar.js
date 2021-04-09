import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/img/logo2.svg";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <nav class="navbar bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <img alt="logo" src={logo2} className="logo"></img>
          </li>
          <li class="nav-item">
            <Link to="homes" style={{textDecoration: 'none'}}>
              <span
                class="nav-link home"
                style={{ paddingLeft: "20px", textAlign: "left" }}
              >
                <i
                  class="fas fa-home"
                  style={{ paddingRight: "5px", textAlign: "left" }}
                ></i>
                Home
              </span>
            </Link>
          </li>
          <li class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbardrop"
              data-toggle="dropdown"
              style={{ paddingLeft: "20px", textAlign: "left" }}
            >
              <i class="fas fa-comment-alt" style={{ paddingRight: "5px" }}></i>
              Sms
            </span>
            <div
              class="dropdown-menu"
              style={{
                backgroundColor: "#ED1260",
                border: "none",
                position: "relative",
              }}
            >
              <a class="dropdown-item" href="?">
                <i class="fas fa-link" style={{ paddingRight: "5px" }}></i>
                Broadcast
              </a>
              <Link to="scheduller" style={{ textDecoration: "none" }}>
                <a class="dropdown-item" href="?">
                  <i class="fas fa-link" style={{ paddingRight: "5px" }}></i>
                  Sms Schaduller
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
