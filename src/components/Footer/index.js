import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer class="footer">
        <div class=" container-fluid ">
          <nav>
            <ul>
              <li>
                <a href="https://www.creative-tim.com">Creative Tim</a>
              </li>
              <li>
                <a href="http://presentation.creative-tim.com">About Us</a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">Blog</a>
              </li>
            </ul>
          </nav>
          <div class="copyright" id="copyright">
            ©{" "}
            <script>
              document.getElementById('copyright').appendChild(document.createTextNode(new
              Date().getFullYear()))
            </script>
            2020, Designed by{" "}
            <a href="https://www.invisionapp.com" target="_blank">
              Invision
            </a>
            . Coded by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
