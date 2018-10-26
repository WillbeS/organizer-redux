import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import HomePage from '../../HomePage';
import AboutPage from '../../AboutPage';
import LoginPage from '../../users/LoginPage';
import LogoutPage from '../../users/LogoutPage';
import RegisterPage from '../../users/RegisterPage';
// import AddTodoPage from '../../todos/AddTodoPage';
import ManageListsPage from '../../lists/ManageListsPage';
import CreateListPage from '../../lists/CreateListPage';
import EditListPage from '../../lists/EditListPage';

const Routes = (props) => (
    <Switch>
        <PrivateRoute path='/' exact component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/users/login' component={LoginPage} />
        <Route path='/users/register' component={RegisterPage} />
        <PrivateRoute path='/users/logout' component={LogoutPage} />
        {/* <PrivateRoute path='/todos/add' component={AddTodoPage} /> */}
        <PrivateRoute path='/lists' component={ManageListsPage} />
        <PrivateRoute path='/list/add' component={CreateListPage} />
        <PrivateRoute path='/list/edit/:id' component={EditListPage} />
    </Switch>
);

export default Routes;