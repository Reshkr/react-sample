import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { GrCube } from "react-icons/gr";
// import "../../App.css";
import "./SideBar.css";
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar" data-color="orange">
        <div className="logo">
          <a
            href="http://www.creative-tim.com"
            className="simple-text logo-mini"
          >
            CT
          </a>
          <a
            href="http://www.creative-tim.com"
            className="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div className="sidebar-wrapper" id="sidebar-wrapper">
          <ul className="nav">
            <li className="active">
              <Link to="dashboard" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons education_atom"></i>

                <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link to="icons" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons education_atom"></i>
                <p>Icons</p>
              </Link>
            </li>
            <li>
              <Link to="maps" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons location_map-big"></i>
                <p>Maps</p>
              </Link>
            </li>
            <li>
              <Link to="notifications" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons ui-1_bell-53"></i>
                <p>Notifications</p>
              </Link>
            </li>
            <li>
              <Link to="userprofile" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons users_single-02"></i>
                <p>User Profile</p>
              </Link>
            </li>
            <li>
              <Link to="tablelist" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons design_bullet-list-67"></i>
                <p>Table List</p>
              </Link>
            </li>
            <li>
              <Link to="typography" style={{ textDecoration: "none" }}>
                <i className="now-ui-icons text_caps-small"></i>
                <p>Typography</p>
              </Link>
            </li>
            <li class="active-pro">
              <Link to="upgradetopro" style={{ textDecoration: "none" }}>
                <i class="now-ui-icons arrows-1_cloud-download-93"></i>
                <p>Upgrade to PRO</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
