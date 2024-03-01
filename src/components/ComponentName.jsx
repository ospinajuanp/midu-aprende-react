import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

const ComponentName = ({ result }) => {

    const { addToNameState } = useContext(AppContext); // example addState

	const handleClick = (resultItem) => { // example addState
		addToNameState(resultItem)
	}

    return (
        <div>
            <img src={result.img[0]} alt={result.title} /> // example props
            <button onClick={ () => handleClick(result)}></button> // example addState
        </div>
    );
};

export default ComponentName;