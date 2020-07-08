import React, { Component } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bg5 from "../../images/bg5.jpg";
import mike from "../../images/mike.jpg"
import { TiSocialFacebook,TiSocialTwitter } from "react-icons/ti";
import {AiOutlineGooglePlus} from "react-icons/ai";
import "./UserProfile.css";

class UserProfile extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" id="main-panel">
          <Header headerText="User Profile" />
          <SideBar />
          <div class="panel-header panel-header-sm"></div>
          <div class="content">
            <div class="row">
              <div class="col-md-8">
                <div class="card">
                  <div class="card-header">
                    <h5 class="title1">Edit Profile</h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="col-md-5 pr-1">
                          <div class="form-group3">
                            <label>Company (disabled)</label>
                            <input
                              type="text"
                              class="form-control3"
                              disabled=""
                              placeholder="Company"
                              value="Creative Code Inc."
                            />
                          </div>
                        </div>
                        <div class="col-md-9 px-1">
                          <div class="form-group">
                            <label>Username</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              value="michael23"
                            />
                          </div>
                        </div>
                        <div class="col-md-4 pl-1">
                          <div class="form-group">
                            <label for="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 pr-1">
                          <div class="form-group">
                            <label>First Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Company"
                              value="Mike"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 pl-1">
                          <div class="form-group">
                            <label>Last Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name"
                              value="Andrew"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Home Address"
                              value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4 pr-1">
                          <div class="form-group">
                            <label>City</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="City"
                              value="Mike"
                            />
                          </div>
                        </div>
                        <div class="col-md-4 px-1">
                          <div class="form-group">
                            <label>Country</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Country"
                              value="Andrew"
                            />
                          </div>
                        </div>
                        <div class="col-md-4 pl-1">
                          <div class="form-group">
                            <label>Postal Code</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="ZIP Code"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>About Me</label>
                            <textarea
                              rows="4"
                              cols="80"
                              class="form-control2"
                              placeholder="Here can be your description"
                             
                            >
                              Lamborghini Mercy, Your chick she so thirsty, I'm
                              in that two seat Lambo.
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-user">
                  <div class="image">
                    <img src={bg5} alt="..." />
                  </div>
                  <div class="card-body">
                    <div class="author">
                      <a href="#">
                        <img
                          class="avatar border-gray"
                          src={mike}
                          alt="..."
                        />
                        <h5 class="title">Mike Andrew</h5>
                      </a>
                      <p class="description">michael24</p>
                    </div>
                    <p class="description text-center">
                      "Lamborghini Mercy <br></br>
                      Your chick she so thirsty <br></br>
                      I'm in that two seat Lambo"
                    </p>
                  </div>
                  <hr></hr>
                  <div class="button-container">
                    <button
                      href="#"
                      class="btn btn-neutral btn-icon btn-round btn-lg"
                    >
                      <div class="fab">
                      <TiSocialFacebook />
                      </div>
                    </button>
                    <button
                      href="#"
                      class="btn btn-neutral btn-icon btn-round btn-lg"
                    >
                      <div class="fab">
                        <TiSocialTwitter/>
                      </div>
                    </button>
                    <button
                      href="#"
                      class="btn btn-neutral btn-icon btn-round btn-lg"
                    >
                      <div class="fab">
                        <AiOutlineGooglePlus/>
                      </div>
                    </button>
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

export default UserProfile;
