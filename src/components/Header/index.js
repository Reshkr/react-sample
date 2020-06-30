import React, { Component } from "react";
import { GoSearch } from "react-icons/go";
import { Dropdown } from "react-bootstrap";
import { MdArrowDropDown } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import PropTypes from "prop-types";
import "./Header.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { headerText } = this.props;
    return (
      <div className="navbar navbar-expand-lg navbar-transparent navbar-absolute">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a class="navbar-brand" href="#pablo">
              {headerText}
            </a>
          </div>
          <div class="navbar-collapse justify-content-end" id="navigation">
            <form>
              <div class="input-group no-border">
                <input
                  type="text"
                  id="inputID"
                  value=""
                  class="form-control"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <GoSearch />{" "}
                  </div>
                </div>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                </a>
              </li>

              {/* <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    color: "white",
                
                  }}
                >
                   <GiWorld/>
                  <MdArrowDropDown />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                      padding:10,
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow:6
                  }}
                >
                  <Dropdown.Item href="#/action-1" style={{color:'black'}}>Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{color:'black'}}>
                    Another action
                  </Dropdown.Item >
                  <Dropdown.Item href="#/action-3" style={{color:'black'}}>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <li class="nav-item dropdown">
                <Dropdown class="dropdown-menu dropdown-menu-right">
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                      textAlign: "start",
                      fontSize: 17,
                      padding: 0,
                    }}
                  >
                    <GiWorld />
                    <MdArrowDropDown />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      padding: 10,
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 6,
                    }}
                  >
                    <Dropdown.Item href="#/action-1" style={{ color: "black" }}>
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" style={{ color: "black" }}>
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" style={{ color: "black" }}>
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#pablo">
                  <i class="now-ui-icons users_single-02"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};
