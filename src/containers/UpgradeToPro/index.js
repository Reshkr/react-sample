import React, { Component } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./UpgradeToPro.css";

class UpgradeToPro extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" id="main-panel">
          <SideBar />
          <Header headerText="Upgrade To Pro" />
          <div class="panel-header panel-header-sm"></div>
          <div class="content">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <div class="card card-upgrade">
                  <div class="card-header text-center">
                    <h4 class="card-title">Now UI Dashboard PRO</h4>
                    <p class="card-category">
                      Are you looking for more components? Please check our
                      Premium Version of Now UI Dashboard PRO.
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive table-upgrade">
                      <table class="table">
                        <thead>
                          <tr>
                            <th></th>
                            <th class="text-center">Free</th>
                            <th class="text-center">PRO</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "start" }}>Components</td>
                            <td class="text-center">16</td>
                            <td class="text-center">160</td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "start" }}>Plugins</td>
                            <td class="text-center">4</td>
                            <td class="text-center">13</td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "start" }}>
                              Example Pages
                            </td>
                            <td class="text-center">7</td>
                            <td class="text-center">27</td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "start" }}>
                              Login, Register, Pricing, Lock Pages
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_check text-success"></i>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "start" }}>
                              DataTables, VectorMap, SweetAlert, Wizard,
                              jQueryValidation, FullCalendar etc...
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_check text-success"></i>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "start" }}>Mini Sidebar</td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_check text-success"></i>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "start" }}>
                              Premium Support
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_simple-remove text-danger"></i>
                            </td>
                            <td class="text-center">
                              <i class="now-ui-icons ui-1_check text-success"></i>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td class="text-center">Free</td>
                            <td class="text-center">Just $49</td>
                          </tr>
                          <tr>
                            <td class="text-center"></td>
                            <td class="text-center">
                              <a
                                href="#"
                                class="btn btn-round btn-default disabled"
                              >
                                Current Version
                              </a>
                            </td>
                            <td class="text-center">
                              <a
                                target="_blank"
                                href="https://www.creative-tim.com/product/now-ui-dashboard-pro?ref=nud-free-upgrade-live"
                                class="btn btn-round btn-primary"
                              >
                                Upgrade to PRO
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default UpgradeToPro;
