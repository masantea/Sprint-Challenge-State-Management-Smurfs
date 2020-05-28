import React from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";
import { fetchSmurfs } from "../actions";

const SmurfVillage = (props) => {
  return (
    <div className="list-container">
      <h2>Smurfs Will Appear Here!</h2>

      <button onClick={props.fetchSmurfs}>Refresh Smurf Village</button>

      {props.initialized && !props.isLoading && (
        <div className="smurf-info">
          {props.smurfs.map((each) => {
            return (
              <Smurf
                name={each.name}
                age={each.age}
                height={each.height}
                key={each.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    initialized: state.initialized,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfVillage);
