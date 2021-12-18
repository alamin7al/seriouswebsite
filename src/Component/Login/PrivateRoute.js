import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from './useAuth';
const PrivateRoute = ({ children, ...rest }) => {

    const { user, loading } = useAuth()
    if (loading) {
        return <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;