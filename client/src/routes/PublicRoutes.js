import React from 'react';
import { Route, Switch} from 'react-router-dom';
import LINKS from 'resources/links';
import SLUGS from '../resources/links';
import basicLogin from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';

function PublicRoutes() {
    return (
        <Switch>
            <Route exact path={SLUGS.login} component={basicLogin}/>
            <Route path={LINKS.signup} component={RegisterPage}/>
        </Switch>
    );
}

export default PublicRoutes;
