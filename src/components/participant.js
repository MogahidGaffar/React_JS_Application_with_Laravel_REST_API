import React, { Component } from "react";

class participant extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.participant.id);
  };

  onEdit = () => {
    this.props.onEdit(this.props.participant);
  };
  render() {
    const { id, name, skill_level, email,availability } = this.props.participant;
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{skill_level} / 10</td>
        <td>{availability}</td>
        <td>
          <button className="mini ui blue button" onClick={this.onEdit}>
            Edit
          </button>
          <button className="mini ui red button" onClick={this.onDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default participant;