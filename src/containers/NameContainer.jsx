import React from 'react';
import ComponentName from '../components/ComponentName'
import useCrudNameAction from '../hooks/useCrudNameAction' // example api call

const API = ''; // example api call

const NameContainer = () => {

    const results = useCrudNameAction(API); // example api call

    return (
        <div>
            { results.map( result => (
            <ComponentName result={result} key={result.id}/> // example use of api
        ))}
        </div>
    );
};

export default NameContainer;