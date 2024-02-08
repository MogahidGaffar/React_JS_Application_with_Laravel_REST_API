import React, { Component } from "react";
import Participant from "./participant";

class participantsList extends Component {
  onDelete = id => {
    // console.log("participant list ", id);
    this.props.onDelete(id);
  };

  onEdit = id => {
    // console.log("participant list ", id);
    this.props.onEdit(id);
  };

  render() {
    const participants = this.props.participants;
    return (
      <div className="data">
                  <h2>participants List</h2>

        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ width: "50px", textAlign: "center" }}>#</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>skill_level</th>
              <th>availability</th>
              <th style={{ width: "148px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {participants.map(participant => {
              return (
                <Participant
                  key={participant.id}
                  participant={participant}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default participantsList;