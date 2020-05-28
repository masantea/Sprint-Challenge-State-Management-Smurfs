import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const CREATE_SMURFS_START = 'CREATE_SMURFS_START';
export const CREATE_SMURFS_SUCCESS = 'CREATE_SMURFS_SUCCESS';
export const CREATE_SMURFS_FAILURE = 'CREATE_SMURFS_FAILURE';

export const fetchSmurfs = () => {
  return dispatch => {
      dispatch({ type: FETCH_SMURFS_START});
      axios
          .get('http://localhost:3333/smurfs')
          .then(response => {
              console.log('API call', response.data);
              dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data})
          })
          .catch(error => {
              console.log('Error', error);
              dispatch({ type: FETCH_SMURFS_FAILURE, payload: error})
          });
  };
};

export const createSmurfs = data => {
    
  return dispatch => {
      dispatch({ type: CREATE_SMURFS_START });
      axios
          .post('http://localhost:3333/smurfs', 
          {
              name: data.name,
              age: Number(data.age),
              height: data.height
          }
          )
      .then(response => {
          console.log('Post Response', response);
          dispatch({ type: CREATE_SMURFS_SUCCESS });
      })
      .catch(error => {
          console.log(error);
          dispatch({ type: CREATE_SMURFS_FAILURE, payload: error });
      });
          
  };
};