/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Header from "./Header"

function Home() {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="content-container">
          <Header />
          <div className="welcome-text">
              <p className='greeting-text'>Hello, Welcome to OCA!</p>
              <p className='after-greeting'>Let’s start make some noise and make your campaign great again! <span style={{color: "#ED1260"}}>click here</span> to spread your messages.</p>
          </div>
          <div className="remaining">remaining</div>
          <div className="table-content">table</div>
        </div>
      </div>
    </>
  );
}

export default Home;
