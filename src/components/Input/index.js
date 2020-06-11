import React from "react";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          paddingTop: 20,
          fontSize: 30,
          color: "red",
        }}
      >
        <input
          style={{ width: "100%", height: 40 }}
          type="text"
          ref="task"
          //   onChange={onChangeText}
        />
      </div>
    );
  }
}
