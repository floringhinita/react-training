import React from "react";
import { Route } from 'react-router-dom'

const ContextRoute = ({ provider, component, ...rest}) => {
    const Provider = provider
    const Component = component

    return (
        <Route {...rest}>
            <Provider>
                <Component />
            </Provider>
        </Route>
    )
}

export default ContextRoute
