import React from 'react'
import user from "../../assets/img/user.png";

function Header() {
    return (
        <div>
            <div className="header">
            <div className="search">
              <input
                type="phone"
                className="form-controls"
                placeholder="Any help?"
              ></input>
            </div>
            <div className="user-account">
              <div className="user">
                <p className="user-name" style={{ padding: "0" }}>
                  Hi, Adjie!
                </p>
                <p className="user-email" style={{ padding: "0" }}>
                  cakepbanget@gmail.com
                </p>
              </div>
              <div className="image-user">
                <img
                  alt="user"
                  src={user}
                  style={{ width: "3rem", height: "3rem" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header
