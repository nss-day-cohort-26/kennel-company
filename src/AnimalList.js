import React, { Component } from "react";
import Animal from "./Animal";
import ApiManager from "./ApiManager"

export default class AnimalList extends Component {
  state = {
    animals: []
  };

  checkOutAnimal = animalId => {
    // Delete the specified animal from the API
    ApiManager.deleteItem("animals", animalId)
      .then(() => {
        return ApiManager.getAll("animals")
      })      
      .then(animalList => {
        this.setState({
          animals: animalList
        });
      });
  };

  componentDidMount() {
    ApiManager.getAll("animals")
    .then(animals => this.setState({ animals: animals }))
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.animals.map(animal => (
            <Animal
              key={animal.id}
              animal={animal}
              checkOutAnimal={this.checkOutAnimal}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
