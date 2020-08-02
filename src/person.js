import React from "react";

class PersonItem extends React.Component {
  render() {
    console.log(this.props.person);
    return (
      <li>
        <h2>
          {this.props.person.firstname} {this.props.person.lastname}
        </h2>
      </li>
    );
  }
}

export default PersonItem;
