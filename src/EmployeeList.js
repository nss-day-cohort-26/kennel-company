import React, { Component } from "react"
import Employee from "./Employee";


export default class EmployeeList extends Component {
    state = {
        employees: []
    }

    componentDidMount () {
        fetch("http://localhost:5002/employees")
        .then(e => e.json())
        .then(employees => this.setState({ employees: employees }))
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.employees.map(employee =>
                        <Employee key={employee.id} employee={employee} foo="hello">
                            {employee.name}
                        </Employee>
                    )
                }
            </React.Fragment>
        )
    }
}
