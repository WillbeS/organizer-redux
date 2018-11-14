import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import AboutPage from '../../AboutPage';
import LoginPage from '../../users/LoginPage';
import LogoutPage from '../../users/LogoutPage';
import RegisterPage from '../../users/RegisterPage';
import ManageListsPage from '../../lists/ManageListsPage';
import DailyTodosPage from '../../todos/DailyTodosPage';
import CreateTodoPage from '../../todos/CreateTodoPage';
import EditTodoPage from '../../todos/EditTodoPage';
import ViewListDetailsPage from '../../lists/ViewListDetailsPage';

const Routes = (props) => (
    <Switch>
        <PrivateRoute path='/' exact component={DailyTodosPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/users/login' component={LoginPage} />
        <Route path='/users/register' component={RegisterPage} />
        <PrivateRoute path='/users/logout' component={LogoutPage} />
        <PrivateRoute path='/lists' component={ManageListsPage} />
        <PrivateRoute path='/list/view/:id' component={ViewListDetailsPage} />
        <PrivateRoute path='/todo/add/:listId?' component={CreateTodoPage} />
        <PrivateRoute path='/todo/edit/:id' component={EditTodoPage} />
    </Switch>
);

export default Routes;