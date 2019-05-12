import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/expense/new" activeClassName="is-active">New Expense</NavLink>
        <NavLink to="/help-page" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;