import React from 'react';
import { Navigate, Route } from 'react-router-dom';

import { ROUTES } from '../Routes.constants';
import { CommonUtils } from './commonUtils';

export default function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            element={
                <>
                    {(props) =>
                        CommonUtils.isLoggedIn() ? (
                            <Component {...props} {...rest} />
                        ) : (
                            <Navigate
                                to={{
                                    pathname: ROUTES.LOGIN,
                                }}
                                state={{ from: props.location }}
                            />
                        )
                    }
                </>
            }
        />
    );
}
