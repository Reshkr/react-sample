import React, { Component } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import "./Maps.css";
import Footer from "../../components/Footer";
class Maps extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" id="main-panel">
          <SideBar />
          <Header headerText="Maps" />
          <div class="panel-header panel-header-sm"></div>

          <div class="content">
            <div class="row">
              <div class="col-md-12">
                <div class="card ">
                  <div class="card-header ">Google Maps</div>
                  <div class="card-body ">
                    <div id="map" class="map">
                      <div className="map-style">
                        <div class="gm-err-container">
                          <div class="gm-err-content">
                            <div class="gm-err-icon">
                              <img
                                src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png"
                                draggable="false"
                                style={{ userSelect: "none" }}
                              />
                            </div>
                            <div class="gm-err-title">
                              Sorry! Something went wrong.
                            </div>
                            <div class="gm-err-message">
                              This page didn't load Google Maps correctly. See
                              the JavaScript console for technical details.
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Maps;
