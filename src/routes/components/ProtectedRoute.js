import React from 'react';
import { Redirect, Route } from 'react-router-dom'; 
import { isAuthenticated } from '../../utils/authentication';
import { HOME_PAGE_URL } from '../URLMap';

const ProtectedRoute = ({component: ProtectedComponent, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { routeProps => {
                if (!isAuthenticated()) return (
                    <Redirect to={{
                        pathname: HOME_PAGE_URL,
                        state: { from: routeProps.location.pathname}
                    }}/>
                );

                return <ProtectedComponent {...routeProps} />
            }}
        />
    );    
}

export default ProtectedRoute;