// external packages: install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense page
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - This is not the page you are looking for...<Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/expense/new" activeClassName="is-active">New Expense</NavLink>
        <NavLink to="/expense/{expense-id}/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help-page" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/expense/new" component={AddExpensePage} />
            <Route path="/help-page" component={HelpPage} />
            <Route path="/expense/{expense-id}/edit" component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>

    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));
