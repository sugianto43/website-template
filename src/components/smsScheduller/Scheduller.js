import React from "react";
import Header from "../home/Header";
import Sidebar from "../home/Sidebar";
import CheckBox from "./CheckBox";
import "./Scheduller.css";
import SelectFormGroup from "./SelectFormGroup";

function Scheduller() {
  return (
    <>
      <div className="scheduller-container">
        <Sidebar />
        <div className="container-content">
          <Header />
          <div className="sms">
            <p className="sms-text">SMS Scheduller</p>
            <div className="form-group text-left">
              <label className="broadcast-name" style={{ textAlign: "left" }}>
                Broadcast Name
              </label>
              <input type="text" className="form-control name-text"></input>
            </div>
            <div className="form-group text-left">
              <label className="broadcast-name">Phonebook</label>
              <input type="phone" className="form-control name-text"></input>
            </div>
          </div>

          <div className="message">
            <div className="form-group text-left">
              <label className="broadcast-name">Message</label>
              <textarea className="message-text" rows="5"></textarea>
              <p className="bottom-caption" style={{ textAlign: "right" }}>
                Character 300/1024
              </p>
              <hr />
            </div>
          </div>
          <div className="schedule">
            <p className="schedule-text" style={{ marginBottom: "5px" }}>
              Schedule
            </p>
            <p className="hidden-text">
              When and how often do you want to broadcast this messages?
            </p>
            <div className="run-on-container">
              <div className="run-text">Run On</div>
              <div className="check-text">
                <div className="checkbox-group">
                  <CheckBox title="Mon" checked="checked"/>
                  <CheckBox title="Tue" />
                  <CheckBox title="Wed" />
                  <CheckBox title="Thu" />
                  <CheckBox title="Fri" />
                  <CheckBox title="Sat" />
                  <CheckBox title="Sun" />
                </div>
                <SelectFormGroup />
                <div style={{textAlign: 'right', marginTop: '60px', marginBottom: '30px'}}>
                  <button
                    type="submit"
                    className="btn col-5 btn-primary btn-sign"
                    value="submit"
                  >
                    Send messages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scheduller;
