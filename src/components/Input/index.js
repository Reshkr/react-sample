import React from "react";
import "./Input.css";
import PropTypes from "prop-types";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { placeholderValue,inputType } = this.props;
    return (
      <div
        className="Input"
      >
        <input
          className="Input-inputstyle"
          type={inputType}
          placeholder={placeholderValue}
          ref="task"
          //   onChange={onChangeText}
        />
      </div>
    );
  }
}
Input.propTypes = {
  placeholderValue: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};
