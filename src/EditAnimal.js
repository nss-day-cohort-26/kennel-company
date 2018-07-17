import React, { Component } from "react";
import ApiManager from "./ApiManager"

export default class EditAnimal extends Component {
  // Set initial state
  state = {
    name: this.props.animal.name,
    breed: this.props.animal.breed
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();

    const updatedAnimal = {name: this.state.name, breed: this.state.breed}
    ApiManager.updateItem("animals", this.props.animal.id, updatedAnimal)
    .then(() => {
      this.props.history.push("/animals");
    })
  };

  render() {
    return (
      <form onSubmit={this.handleUpdate}>
        <h1 className="h3 mb-3 font-weight-normal">Edit Animal</h1>
        <label htmlFor="inputName">Animal Name</label>
        <input
          value={this.state.name}
          onChange={this.handleFieldChange}
          type="text"
          id="name"
          placeholder="Name"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputBreed">Animal Breed</label>
        <input
          value={this.state.breed}
          onChange={this.handleFieldChange}
          type="text"
          id="breed"
          placeholder="Breed"
          required=""
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}
