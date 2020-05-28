import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchSmurfs, createSmurfs } from '../actions';

const NewSmurf = props => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        props.createSmurfs(data);
        setTimeout(() => { props.fetchSmurfs(); }, 1000);
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name </label>
          <input name='name' ref={register} />
          <label>Age </label>
          <input name='age' type="number" ref={register} />
          <label>Height: </label>
          <input name='height' ref={register} />
          <input type='submit'/>
      </form>
  )
};

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps, {fetchSmurfs, createSmurfs})(NewSmurf);