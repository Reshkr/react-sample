import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div className="Button">
        <button className="Button-buttonstyle">
          {buttonText}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
