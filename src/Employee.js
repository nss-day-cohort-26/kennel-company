import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const Employee =  (props) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{props.children}</h5>
        <Link
          className="card-link"
          to={{
            pathname: `/employees/${props.employee.id}`,
            state: { employee: props.employee }
          }}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

Employee.propTypes = {
    // This rule ensures that `employee` is passed a property
    // and that is an object - not a string or number
    employee: PropTypes.object.isRequired,
    foo: PropTypes.string.isRequired
}

export default Employee
