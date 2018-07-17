import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import LocationList from "./LocationList";
import AnimalList from "./AnimalList";

export default class Kennel extends Component {
  state = {
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ],
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ],
    animals: [
      { id: 1, name: "Doodles" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Angus" },
      { id: 4, name: "Henley" },
      { id: 5, name: "Derkins" },
      { id: 6, name: "Checkers" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList animals={this.state.animals} />
      </React.Fragment>
    );
  }
}
