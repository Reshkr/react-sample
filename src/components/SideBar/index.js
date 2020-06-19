import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineMeh,
  AiOutlineTrademark,
} from "react-icons/ai";

class App extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="SideBar-CT">
          <a href="http://www.creative-tim.com" class="simple-text-logo-mini">
            CT
          </a>
          <a href="http://www.creative-tim.com" class="simple-text-logo-normal">
            Creative Tim
          </a>
        </div>
        <div>
         
            <nav>
              <Link to="maps" className="SideBar-linkstyle">
                <div className="SideBar-textstyle">
                  <AiOutlineHome
                    style={{ fontSize: 25, color: "white", paddingTop: 20 }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 23,
                        color: "red",
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: 4,
                      }}
                    />
                    <h1
                      style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      sideBarName
                    </h1>
                  </div>
                </div>
              </Link>

              <Link to="about" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 20,
                  }}
                >
                  <AiOutlineMeh
                    style={{ fontSize: 25, color: "white", paddingTop: 20 }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 23,
                        color: "red",
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: 4,
                      }}
                    />
                    <h1
                      style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      sideBarName
                    </h1>
                  </div>
                </div>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 20,
                  }}
                >
                  <AiOutlinePhone
                    style={{ fontSize: 25, color: "white", paddingTop: 20 }}
                  />
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 23,
                        color: "red",
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: 4,
                      }}
                    />
                    <h1
                      style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        fontSize: 15,
                        color: "white",
                      }}
                    >
                      sideBarName
                    </h1>
                  </div>
                </div>
              </Link>
            </nav>
        </div>
      </div>
    );
  }
}
export default App;
