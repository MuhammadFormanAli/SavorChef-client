import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const{user,loading} =useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='w-100 h-100 bg-secondary mx-auto d-flex align-items-center justify-content-center'><Spinner animation="border" variant="light" /></div>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivetRoute;