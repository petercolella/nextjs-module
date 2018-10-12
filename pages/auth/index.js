import React from 'react';

import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Peter" age={ 54 } />
    </div>
);

export default authIndexPage;