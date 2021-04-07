import React from 'react'
import logo2 from "../../assets/img/logo2.svg";
import home from "../../assets/img/house.png";

function Sidebar() {
    return (
        <div>
            <nav class="navbar bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item">
              <img alt="logo" src={logo2} className="logo"></img>
            </li>
            <li class="nav-item">
              <i class="fas fa-home"></i>
              <img
                alt="chat"
                style={{ height: "0.8rem", width: "0.8rem" }}
                src={home}
              ></img>
              <span class="nav-link">Home</span>
            </li>
            <li class="nav-item dropdown">
              <span
                class="nav-link dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Sms
              </span>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="?">
                  Broadcast
                </a>
                <a class="dropdown-item" href="?">
                  Sms Schaduller
                </a>
              </div>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Sidebar
