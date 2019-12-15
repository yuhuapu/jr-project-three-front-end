import React from 'react';
import { Redirect, Route } from 'react-router-dom'; 
import { isAuthenticated } from '../../utils/authentication';
import { ADMIN_LOGIN_URL } from '../URLMap';

const AdminProtectedRoute = ({component: ProtectedComponent, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { routeProps => {
                if (!isAuthenticated()) return (
                    <Redirect to={{
                        pathname: ADMIN_LOGIN_URL,
                        state: { from: routeProps.location.pathname}
                    }}/>
                );

                return <ProtectedComponent {...routeProps} />
            }}
        />
    );
}

export default AdminProtectedRoute;