import React from "react";

//
class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <GetInput input={this.state.input} onChange={this.handleChange} />
        <RenderValue input={this.state.input} />
      </div>
    );
  }
}
//
class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

class RenderValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}

// export default MyApp;
