import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAutenticate } from '../utils/loginManager';

const PrivateRoute = (props) => {

    const { component: Component, ...others } = props;

    return (

        <Route {...others}
            render={propsRender => {
                return isAutenticate()
                    ? <Component {...propsRender} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: propsRender.location }
                    }} />

            }}
        />
    );
}

export default PrivateRoute;