import React from "react";

//
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log("Hello World!");
    // Change code above this line
  }
  render() {
    return <div />;
  }
}
//
export default MyComponent;
