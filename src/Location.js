import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
      <div className="card" style={{width: `18rem`}}>
          <div className="card-body">
              <h5 className="card-title">
                  {props.location.name}
              </h5>
              <Link className="card-link"
                  to={{
                      pathname: `/locations/${props.location.id}`,
                      state: { location: props.location }
                  }}>
                  Details
              </Link>
          </div>
      </div>
  )
}
