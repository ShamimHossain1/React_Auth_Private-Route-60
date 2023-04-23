import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Button } from 'flowbite-react';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between lg:px-28 px-3">
                <p className="lg:text-2xl font-bold">Auth Master</p>
                <div className='lg:pr-52'>
                    <Link to='/'         className="btn btn-ghost normal-case lg:text-xl">Home    </Link>
                    <Link to='/orders'   className="btn btn-ghost normal-case lg:text-xl">Orders  </Link>
                    <Link to='/profile'   className="btn btn-ghost normal-case lg:text-xl">Profile  </Link>
                    <Link to='/login'    className="btn btn-ghost normal-case lg:text-xl">Login   </Link>
                    <Link to='/register' className="btn btn-ghost normal-case lg:text-xl">Register</Link>
                </div>
                {
                    user ? <div>{user.email} <Button onClick={handleLogout}>Sign Out</Button></div> : <Link to='/login'><Button>Sign In</Button></Link>
                }
            </div>
        </div>
    );
};

export default Header;