import React, { useContext } from 'react';
import { AuthContext } from '../Component/Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user , loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress flex bg-slate-400 w-52 mx-auto mt-44"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' replace={true}></Navigate>;

};

export default PrivateRoute;