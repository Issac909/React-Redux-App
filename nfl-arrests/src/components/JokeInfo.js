import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchData, fetchJoke } from '../actions';

const JokeData = props => {
    return (
    <div>
        <button onClick = {props.fetchData}>New Joke</button>
        {!props.category && !props.isLoading && (
            <h2>Choose new joke to get started</h2>
        )}
        {props.isLoading && (
            <Loader
                type = 'Puff'
                color = 'black'
                height = {100}
                width = {100}
                timeout = {5000}
            />
        )}
        {props.category && !props.isLoading && <h2>{props.category} </h2>}
    </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        category: state.category,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchData }
)(JokeData);