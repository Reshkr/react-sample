import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div style={{ paddingTop: 20, fontSize: 30, color: "white" }}>
        <button
          style={{
            width: 100,
            height: 50,
            backgroundColor: "violet",
            fontSize: 30,
            color: "white",
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
