import React from 'react'
import { Route, Redirect } from "react-router-dom";
export default function PrivateRouter({ children, ...rest }) {
    return (
        <Route 
            {...rest}
            render={() => 
                true ? children: <Redirect  to="/login" /> 
            }
        
        />
    );
}
