import { React, useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    const { currentUser } = useContext(AuthContext);

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

