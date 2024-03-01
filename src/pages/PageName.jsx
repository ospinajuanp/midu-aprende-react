import React from 'react';
import { Link } from 'react-router-dom';

const PageName = () => {
    return (
        <div>
            <h2>Hi, I'm Page 2</h2>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default PageName;