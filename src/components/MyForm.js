import React, { Component } from "react";

class MyForm extends Component {
  state = {
    form: { name: "", skill_level: "", email: "" , availability : "", isEdit: false },
    btnName: "Save",
    btnClass: "ui primary button submit-button"
  };

  isEmptyObj(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmptyObj(this.props.participant)) {
      this.setState({
        form: { ...this.props.participant, isEdit: true },
        btnName: "Update",
        btnClass: "ui orange button submit-button"
      });
      // console.log("update");
    }
  }

  onFormSubmit = event => {
    // prevent form submit
    event.preventDefault();

    // form validation
    if (this.formValidation()) {
      // send form data to app
      this.props.onFormSubmit(this.state.form);

      // change the button to save
      this.setState({
        btnName: "Save",
        btnClass: "ui primary button submit-button"
      });

      // clear form fields
      this.clearFormFields();
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  formValidation = () => {
    //  name
    if (document.getElementsByName("name")[0].value === "") {
      alert("Enter name");
      return false;
    }

    // skill_level 
    if (document.getElementsByName("skill_level")[0].value === "") {
      alert("Enter skill_level");
      return false;
    }

      // availability
      if (document.getElementsByName("availability")[0].value === "") {
        alert("Enter availability");
        return false;
      }

    // email
    if (document.getElementsByName("email")[0].value === "") {
      alert("Enter email");
      return false;
    }

    return true;
  };

  clearFormFields = () => {
    // console.log("clear");
    // change form state
    this.setState({
      form: { name: "", skill_level: "",availability: "", email: "", isEdit: false }
    });

    // clear form fields
    document.querySelector(".form").reset();
  };

  render() {
    return (
      <form className="ui form">
        <div className="fields">

          <div className="four wide field">
            <label>name</label>
            <input
              type="text"
              name="name"
              placeholder=" Name"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </div>

          <div className="six wide field">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="joe@schmoe.com"
              onChange={this.handleChange}
              value={this.state.form.email}
            />
          </div>
          
          
          <div className="four wide field">
            <label>skill_level</label>
            <input
              type="text"
              name="skill_level"
              placeholder="skill_level"
              onChange={this.handleChange}
              value={this.state.form.skill_level}
            />
          </div>


          <div className="four wide field">
            <label>availability</label>
            { <input
              type="text"
              name="availability"
              placeholder="availability"
              onChange={this.handleChange}
              value={this.state.form.availability}
            /> }
          </div>


          <div className="two wide field">
            <button className={this.state.btnClass} onClick={this.onFormSubmit}>
              {this.state.btnName}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default MyForm;