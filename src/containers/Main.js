import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import DashBoard from "./DashBoard";
import Icons from "./Icons";
import Maps from "./Maps";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";
import TableList from "./TableList";
import Typography from "./Typography";
import UpgradeToPro from "./UpgradeToPro";
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/icons" component={Icons} />
      <Route exact path="/maps" component={Maps} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/tablelist" component={TableList} />
      <Route exact path="/typography" component={Typography} />
      <Route exact path="/upgradetopro" component={UpgradeToPro} />
    </Switch>
  </main>
);

export default Main;
