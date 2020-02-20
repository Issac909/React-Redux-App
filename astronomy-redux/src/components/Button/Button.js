import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../../actions';

const Button = props => {
    const handleClick = e => {
        e.preventDefault();
        props.fetchData();
    };
    return (
        <button onClick = {handleClick}>Our home</button>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    { fetchData }
)(Button);