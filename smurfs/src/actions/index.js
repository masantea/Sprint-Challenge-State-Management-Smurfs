import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCH_SUCCESS = "SMURFS_FETCH_SUCCESS";
export const SMURFS_FETCH_FAILURE = "SMURFS_FETCH_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADD_SUCCESS = "SMURF_ADDED";
export const SMURF_ADD_FAILURE = "ADD_SMURF_ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: SMURFS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SMURFS_FETCH_FAILURE, payload: err });
    });
};

export const addSmurf = ({ name, age, height }) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => {
      dispatch({ type: SMURF_ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SMURF_ADD_FAILURE, payload: err });
    });
};
