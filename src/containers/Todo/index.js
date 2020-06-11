import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <p style={{ fontSize: 40, color: "green" }}>ToDo List</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingRight: 10,
            paddingLeft: 10,
          }}
        >
          <div style={{ display: "flex", flex: 8 }}>
            <Input />
          </div>
          <div style={{ display: "flex", flex: 0.5, paddingLeft: 10 }}>
            <Button buttonText="ADD" />
          </div>
        </div>
      </div>
    );
  }
}
