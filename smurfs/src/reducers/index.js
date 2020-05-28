import { FETCHING_SMURFS, SMURFS_FETCH_SUCCESS, SMURFS_FETCH_FAILURE, ADDING_SMURF, SMURF_ADD_SUCCESS, SMURF_ADD_FAILURE } from "../actions"

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURFS_FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        fetchingSmurfs: false
      };
    case SMURFS_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        addingSmurf: false
      };
    case SMURF_ADD_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingSmurf: false
      };

      default:
        return state
  }
};

