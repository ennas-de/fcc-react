import React from "react";
import PropTypes from "prop-types";

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"Abdulhakeem"} />
      </div>
    );
  }
}
// Change code below this line

// functional STATELESS component
const Camper = (props) => {
  return <p>Hello {props.name}</p>;
};
// class STATELESS component
// class Camper extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <p>{this.props.name}</p>;
//   }
// }

Camper.defaultProps = {
  name: "CamperBot",
};

Camper.propTypes = { name: PropTypes.string.isRequired };
