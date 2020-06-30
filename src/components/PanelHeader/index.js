import React, { Component } from "react";
import "./PanelHeader.css";

class PanelHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="panel-header">
        <div class="header text-center">
          <h2 class="title">Notifications</h2>
          <p class="category">
            Handcrafted by our friend
            <a target="_blank" href="https://github.com/mouse0270">
              Robert McIntosh
            </a>
            . Please checkout the{" "}
            <a
              href="http://bootstrap-notify.remabledesigns.com/"
              target="_blank"
            >
              full documentation.
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default PanelHeader;
