import React, { Component } from "react";
import Location from "./Location";

export default class LocationList extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ]
  };

  // componentDidMount () {
  //   getAll("locations")
  //   .then(locations => this.setState({ locations: locations }))
  // }

  render() {
    return (
      <React.Fragment>
        {this.state.locations.map(location => <Location key={location.id} location={location}/>)}
      </React.Fragment>
    );
  }
}
