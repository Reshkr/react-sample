import React from "react";
import PropTypes from "prop-types";
import "./DropDown.css";
import { GoSearch } from "react-icons/go";
import { Dropdown } from "react-bootstrap";
import { MdArrowDropDown } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
       
        <Dropdown alignRight> 
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
             <button type="button" class="btn btn-round btn-outline-default dropdown-toggle1 btn-simple btn-icon no-caret" data-toggle="dropdown1">
            <i class="now-ui-icons loader_gear"></i>
          </button>
          </Dropdown.Toggle>
          <Dropdown.Menu
          drop="left"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              boxShadow: 6,
              width:150,
            
            }}
          >
            <Dropdown.Item href="#/action-1" style={{ paddingLeft:15,color: "black" }}>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={{ paddingLeft:15,color: "black" }}>
              Another action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={{paddingLeft:15, color: "black" }}>
              Something else
            </Dropdown.Item>
             <Dropdown.Item href="#/action-4" style={{ paddingLeft:15,color: "red" }}>
             Remove Data
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
       
    );
  }
}
DropDown.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
