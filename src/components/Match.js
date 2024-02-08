import React, { Component } from "react";

class Match extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.match.id);
  };

  onEdit = () => {
    this.props.onEdit(this.props.match);
  };
  render() {
    const { id, scheduled_time, participant1,participant2  } = this.props.match;
    console.log(this.props.match.participant1);
    return (
      <tr>
        <td style={{ textAlign: "center" }}>{id}</td>
        <td>{participant1.name} /  skill level : { participant1.skill_level} / 10 </td>
        <td>{participant2.name} /  skill level : {participant2.skill_level} / 10 </td>
        <td>{scheduled_time}</td>
       
      </tr>
    );
  }
}

export default Match;