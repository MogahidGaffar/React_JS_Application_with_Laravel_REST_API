import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import ParticipantList from "./ParticipantList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
  state = {
    participants: [],
    loader: false,
    participant: {},
    url: "http://127.0.0.1:8000/api/participants"
  };

  getparticipants = async () => {
    this.setState({ loader: true });
    const participants = await axios.get(this.state.url);
    this.setState({ participants: participants.data, loader: false });
  };

  deleteparticipant = async id => {
    this.setState({ loader: true });

    await axios.delete(`${this.state.url}/${id}`).catch(e => {
      alert(e.response.status === 404 ? "participant not found" : "");
    });

    this.getparticipants();
  };

  createparticipant = async data => {
    this.setState({ loader: true });

    await axios
      .post(this.state.url, {
        name: data.name,
        name: data.name,
        email : data.email ,
        skill_level: data.skill_level,
        availability: data.availability
      })
      .catch(e => {
        // console.log(e.message)
        alert(e.response.status === 500 ? "Email already exists" : "");
      });

    this.getparticipants();
  };

  editparticipant = async data => {
    // clear participant obj
    this.setState({ participant: {} });

    this.setState({ loader: true });

    await axios
      .put(`${this.state.url}/${data.id}`, {
        name: data.name,
        email : data.email ,
        skill_level: data.skill_level,
        availability: data.availability,
      })
      .catch(e => {
        console.log(e.message);
      });

    this.getparticipants();
  };

  componentDidMount() {
    this.getparticipants();
  }

  onDelete = id => {
    // console.log("app ", id);
    this.deleteparticipant(id);
  };

  onEdit = data => {
    // console.log("app ", data);
    this.setState({ participant: data });
  };

  onFormSubmit = data => {
    if (data.isEdit) {
      // if is edit true
      this.editparticipant(data);
    } else {
      // if is edit false
      this.createparticipant(data);
    }
  };

  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              React JS Match scheduling App with Laravel API
            </a>
          </div>
        </div>

        <div className="ui main container">
          <MyForm
            onFormSubmit={this.onFormSubmit}
            participant={this.state.participant}
          />
          {this.state.loader ? <Loader /> : ""}
          <ParticipantList
            participants={this.state.participants}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;