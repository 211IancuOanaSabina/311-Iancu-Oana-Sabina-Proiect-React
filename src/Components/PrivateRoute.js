import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute(props, {component: Component, ...rest}
) {

    const {currentUser} = useAuth()

    return (
        <Routes>
            <Route
                {...rest}
                render = {props => {
                    return currentUser ? <Component {...props}/> : <Navigate to="/login"/>
                }}
            >
                
            </Route>
        </Routes>
    )
}
