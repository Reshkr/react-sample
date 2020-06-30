import React, { Component } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./DashBoard.css";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" id="main-panel">
          <Header headerText="Dashboard" />
          <SideBar />
          <div class="panel-header panel-header-sm"></div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default DashBoard;
