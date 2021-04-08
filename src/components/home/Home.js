/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Table from "./Table";

function Home() {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="content-container">
          <Header />
          <div className="welcome-text">
            <p className="greeting-text">Hello, Welcome to OCA!</p>
            <p className="after-greeting">
              Let’s start make some noise and make your campaign great again!{" "}
              <span style={{ color: "#ED1260" }}>click here</span> to spread
              your messages.
            </p>
          </div>
          <div className="remaining">
            <p style={{ marginTop: "30px" }} className="remaining-quota">
              Remaining Quota
            </p>
            <div className="container-tab">
              <div className="tab1">
                <div className="content-tab">
                  <p className="text">Call</p>
                  <p className="call-count">4840 seconds</p>
                </div>
              </div>
              <div className="tab2">
                <div className="content-tab">
                  <p className="text">SMS</p>
                  <p className="sms-count">1245 message</p>
                </div>
              </div>
              <div className="tab3">
                <div className="content-tab">
                  <p className="text">Email</p>
                  <p className="mail-count">7710 mail</p>
                </div>
              </div>
              <div className="tab4">
                <div className="content-tab">
                  <p className="text">Whatsapp</p>
                  <p className="whatsapp-count">330 messages</p>
                </div>
              </div>
            </div>
          </div>
          <div className="table-content">
              <div className='header-table'>
                  <div className='head-caption'>
                      <div className='recent'>Recent BLAST</div>
                      <div className='sort-filter'>
                          <p>Sort</p>
                          <p>Filter</p>
                      </div>
                  </div>
                  <hr></hr>
              </div>
              <div className='table'>
                <Table />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
