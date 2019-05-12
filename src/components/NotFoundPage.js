import React from 'react';
import {Link} from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        404 - This is not the page you are looking for...<Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;