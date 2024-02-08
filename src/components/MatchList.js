import React, { Component } from "react";
import Match from "./Match";

class MatchList extends Component {
  

  render() {
    const matches = this.props.matches;
    return (
   
    
      <div className="data">
          <h2>Matches List</h2>
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ width: "50px", textAlign: "center" }}>#</th>
              <th>participant1</th>
              <th>participant2</th>
              <th>scheduled_time</th>
            </tr>
          </thead>

          <tbody>
            {matches.map(match => {
              return (
                <Match
                  key={match.id}
                  match={match}
                />
              );
            })}
          </tbody>
        </table>
       
      </div>
    
    );
  }
}

export default MatchList;