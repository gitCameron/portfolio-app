import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItemPage = (props) => {
    console.log(props);

    return (
        <div>
            <h2>A Thing I've Done</h2>
            <p>This page is for the item with an id of { props.match.params.id }.</p>
            <Link to='../portfolio'>Back</Link> 
        </div>
    );
};
  

export default PortfolioItemPage;