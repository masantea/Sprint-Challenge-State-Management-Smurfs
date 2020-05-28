import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { getSmurfs } from '../actions';

const SmurfVillage = props => {

    return (
        <div className='list-container'>
            <h2>Smurfs Will Appear Here!</h2>
            
            <button onClick={props.getSmurfs}>Refresh Smurf Village</button>

            {props.initialized && !props.isLoading && (
                <div className='smurf-info'>
                    {props.smurfs.map(each => {
                        return (
                        <Smurf 
                            name={each.name}
                            age={each.age}
                            height={each.height}
                            key={each.id}
                        />
                        )
                    })}
                        
                </div>
            )}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfVillage);
