import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";
import Animal from "./Animal";
import Location from "./Location";
import Employee from "./Employee";
import Login from "./Login"
import EditAnimal from "./EditAnimal"
import Auth from "./Auth/Auth"

const auth = new Auth()

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const { isAuthenticated } = auth

export default class ApplicationViews extends Component {
// Check if credentials are in local storage

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
    if (isAuthenticated()) {
        return <LocationList />
    } else {
        return <Login auth={auth} {...props}/>
    }
}} />
        <Route path="/locations/:locationId" render={(props) => {
          return <Location location={props.location.state.location} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals}/>
        }} />
        <Route exact path="/animals/:animalId" render={(props) => {
          return <Animal animal={props.location.state.animal} {...props}/>
        }} />
        <Route path="/animals/:animalId/edit" render={(props) => {
          return <EditAnimal animal={props.location.state.animal} {...props}/>
        }} />
        <Route exact path="/employees" component={EmployeeList} />
        <Route path="/employees/:employeeId" render={(props) => {
    return <Employee employee={props.location.state.employee}>
        {props.location.state.employee.name}
    </Employee>
}} />
        <Route path="/login" component={Login} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props)
          return <LocationList {...props} />
        }} />
        
      </React.Fragment>
    );
  }
}
